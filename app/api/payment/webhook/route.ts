import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { verifyWebhookSignature } from '@/lib/razorpay';
import { sendPaymentNotifications } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-razorpay-signature');

    if (!signature) {
      return NextResponse.json({ message: 'Missing signature header' }, { status: 400 });
    }

    const isValid = verifyWebhookSignature(rawBody, signature);
    if (!isValid) {
      return NextResponse.json({ message: 'Invalid webhook signature' }, { status: 401 });
    }

    const event = JSON.parse(rawBody);

    if (event.event === 'payment.captured') {
      const paymentEntity = event.payload?.payment?.entity;
      if (paymentEntity?.order_id) {
        const updated = db.updatePayment(paymentEntity.order_id, {
          status: 'Paid',
          razorpayPaymentId: paymentEntity.id,
          method: paymentEntity.method,
          verifiedAt: new Date().toISOString(),
        });
        if (updated) {
          sendPaymentNotifications(updated).catch(console.error);
        }
      }
    } else if (event.event === 'payment.failed') {
      const paymentEntity = event.payload?.payment?.entity;
      if (paymentEntity?.order_id) {
        db.updatePayment(paymentEntity.order_id, {
          status: 'Failed',
          razorpayPaymentId: paymentEntity.id,
        });
      }
    }

    return NextResponse.json({ status: 'ok' });
  } catch (err: any) {
    console.error('Webhook error:', err);
    return NextResponse.json({ message: 'Webhook processing error' }, { status: 500 });
  }
}
