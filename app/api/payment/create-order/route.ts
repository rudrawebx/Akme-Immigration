import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getRazorpayClient, RAZORPAY_KEY_ID, isRazorpayConfigured } from '@/lib/razorpay';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customerName, phone, email, service, amount } = body;

    if (!customerName || !phone || !email || !amount || amount < 100) {
      return NextResponse.json(
        { success: false, message: 'Invalid payment parameters. Minimum amount is ₹100.' },
        { status: 400 }
      );
    }

    const amountInPaise = Math.round(amount * 100);
    const receipt = `rcpt_${Date.now()}`;

    let orderId = '';
    let isMock = false;

    const rzp = getRazorpayClient();

    if (rzp && isRazorpayConfigured()) {
      // Live / Sandbox Razorpay Gateway
      const order = await rzp.orders.create({
        amount: amountInPaise,
        currency: 'INR',
        receipt,
        notes: {
          customerName,
          phone,
          service,
        },
      });
      orderId = order.id;
    } else {
      // Development / Mock fallback when keys are not yet provided in .env
      isMock = true;
      orderId = `order_mock_${Date.now()}`;
    }

    // Record in local database
    const paymentRecord = db.createPayment({
      orderId,
      customerName,
      phone,
      email,
      service,
      amount,
      currency: 'INR',
      status: 'Created',
    });

    return NextResponse.json({
      success: true,
      orderId,
      amount: amountInPaise,
      currency: 'INR',
      keyId: RAZORPAY_KEY_ID || 'rzp_test_placeholder',
      paymentRecordId: paymentRecord.id,
      isMock,
    });
  } catch (error: any) {
    console.error('Create Order Error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to create payment order.' },
      { status: 500 }
    );
  }
}
