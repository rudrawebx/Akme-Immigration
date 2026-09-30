import { Metadata } from 'next';
import PaymentCheckout from '@/components/PaymentCheckout';
import TrustStrip from '@/components/TrustStrip';
import { ShieldCheck, Lock, AlertCircle, CreditCard, QrCode } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Make a Secure Online Payment | AKME Immigrations',
  description: 'Pay official AKME consultancy retainer, application processing, and language coaching fees securely via Razorpay with UPI, QR, Debit/Credit Card, and Net Banking.',
};

export default function PaymentPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Razorpay Payment Gateway</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Make a Secure Online Payment
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Pay consultancy advisory, document evaluation, and language course enrollment fees securely through UPI or bank cards.
          </p>
        </div>

        {/* Mandatory Policy Notice */}
        <div className="max-w-2xl mx-auto mb-8 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs text-amber-900">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">Important University Fee Disclaimer:</p>
            <p className="leading-relaxed">
              AKME Immigrations acts solely as an educational guidance and visa advisory service. <strong>All college and university tuition fees must always be wired directly to the respective educational institution.</strong> AKME Immigrations never collects or holds student tuition fees.
            </p>
          </div>
        </div>

        {/* Payment Checkout Box */}
        <PaymentCheckout />

      </div>
      <div className="mt-16">
        <TrustStrip />
      </div>
    </div>
  );
}
