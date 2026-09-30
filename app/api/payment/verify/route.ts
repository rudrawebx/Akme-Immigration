import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { verifyPaymentSignature } from '@/lib/razorpay';
import { sendPaymentNotifications } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { orderId, paymentId, signature } = body;

    if (!orderId || !paymentId || !signature) {
      return NextResponse.json(
        { success: false, message: 'Missing verification parameters.' },
        { status: 400 }
      );
    }

    // Cryptographic signature check
    const isValid = verifyPaymentSignature({
      orderId,
      paymentId,
      signature,
    });

    if (!isValid) {
      // Record failure
      db.updatePayment(orderId, {
        status: 'Failed',
        razorpayPaymentId: paymentId,
      });

      return NextResponse.json(
        { success: false, message: 'Cryptographic signature verification failed.' },
        { status: 400 }
      );
    }

    // Mark as Paid
    const updatedPayment = db.updatePayment(orderId, {
      status: 'Paid',
      razorpayPaymentId: paymentId,
      signature,
      verifiedAt: new Date().toISOString(),
    });

    if (updatedPayment) {
      sendPaymentNotifications(updatedPayment).catch(err => {
        console.error('Failed to dispatch payment notification email:', err);
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Payment verified and confirmed successfully.',
      payment: updatedPayment,
    });
  } catch (error: any) {
    console.error('Verification API error:', error);
    return NextResponse.json(
      { success: false, message: 'Payment verification error.' },
      { status: 500 }
    );
  }
}
