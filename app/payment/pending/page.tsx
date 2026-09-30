import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, RefreshCw, MessageCircle, Home } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Payment Awaiting Confirmation | AKME Immigrations',
  description: 'Your payment status is being verified with the bank gateway.',
};

export default function PaymentPendingPage({
  searchParams,
}: {
  searchParams: { orderId?: string };
}) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-amber-200 shadow-xl text-center space-y-6">
        
        <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto">
          <Clock className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Awaiting Bank Confirmation
          </span>
          <h1 className="text-2xl font-bold text-slate-900 font-heading">
            Payment Processing
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Your transaction has been submitted to your bank or UPI provider. Final confirmation may take 5-15 minutes depending on bank clearance.
          </p>
        </div>

        {searchParams?.orderId && (
          <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500 font-mono">
            Order Reference: {searchParams.orderId}
          </div>
        )}

        <div className="space-y-3 pt-2">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20AKME,%20my%20payment%20is%20showing%20pending%20for%20order%20${searchParams?.orderId || 'ID'}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>Confirm with Accounts Desk</span>
          </a>

          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
