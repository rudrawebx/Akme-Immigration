import { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Phone, MessageCircle, Home } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Payment Incomplete or Failed | AKME Immigrations',
  description: 'Your payment could not be completed. Check options to retry or contact our accounts support.',
};

export default function PaymentFailedPage({
  searchParams,
}: {
  searchParams: { orderId?: string; reason?: string };
}) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-red-200 shadow-xl text-center space-y-6">
        
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase font-bold text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Transaction Incomplete
          </span>
          <h1 className="text-2xl font-bold text-slate-900 font-heading">
            Payment Not Completed
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The payment could not be finalized. No funds have been deducted by AKME Immigrations. If an amount was debited from your bank account, your bank will automatically reverse it within 3-5 business days.
          </p>
        </div>

        {searchParams?.reason && (
          <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500 font-mono">
            Reason: {searchParams.reason}
          </div>
        )}

        <div className="space-y-3 pt-2">
          <Link
            href="/payment"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-brand-red hover:bg-brand-redDark transition-colors shadow"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Payment Again</span>
          </Link>

          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20AKME,%20my%20payment%20failed%20online.%20Can%20you%20assist%20me?`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
            <span>Assistance via WhatsApp</span>
          </a>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 pt-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Back to Homepage</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
