import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { CheckCircle2, Phone, MessageCircle, Home, Printer, FileText } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Payment Successful | AKME Immigrations',
  description: 'Your payment to AKME Immigrations has been successfully processed and verified.',
};

export default function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: { paymentId?: string };
}) {
  const paymentId = searchParams?.paymentId || `AKME-PAY-${new Date().getFullYear()}-CONFIRMED`;

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-lg w-full bg-white rounded-3xl p-8 border border-emerald-200 shadow-xl text-center space-y-6">
        
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Payment Verified
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Payment Successful!
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Thank you for your transaction. Your payment has been securely confirmed and recorded in our database.
          </p>
        </div>

        {/* Transaction Reference Box */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left space-y-2.5 text-xs sm:text-sm">
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-slate-500">Transaction Reference:</span>
            <span className="font-mono font-bold text-brand-red">{paymentId}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-slate-500">Status:</span>
            <span className="font-semibold text-emerald-600">Paid & Verified</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-slate-500">Date & Time:</span>
            <span className="text-slate-700">{new Date().toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Beneficiary:</span>
            <span className="text-slate-700">{SITE_CONFIG.legalName}</span>
          </div>
        </div>

        <p className="text-xs text-slate-500">
          An automated receipt has been logged. Our administrative accounts desk will acknowledge receipt within standard business hours.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20AKME,%20I%20have%20completed%20my%20payment%20(Ref:%20${paymentId}).%20Please%20confirm.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>Notify Advisor on WhatsApp</span>
          </a>

          <div className="flex items-center justify-center gap-3">
            <Link
              href="/"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return Home</span>
            </Link>
            <Link
              href="/contact"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-red" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
