'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  CreditCard, 
  ShieldCheck, 
  Lock, 
  AlertCircle, 
  Loader2, 
  CheckCircle,
  HelpCircle,
  QrCode
} from 'lucide-react';
import { SITE_CONFIG, SERVICES_LIST } from '@/lib/config';
import { trackConversion } from '@/lib/analytics';

const PRESET_AMOUNTS = [
  { label: 'Initial Profile Evaluation', amount: 1500, desc: 'Detailed document review & university shortlisting' },
  { label: 'Application & Admission Support', amount: 5000, desc: 'SOP drafting, university lodgment & follow-ups' },
  { label: 'Comprehensive Visa Filing Service', amount: 10000, desc: 'Visa documentation, financial audit & mock interview' },
];

export default function PaymentCheckout() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Study Visa Processing',
    amount: 2500,
    customAmount: '',
    useCustomAmount: false,
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const selectedAmount = formData.useCustomAmount
    ? parseInt(formData.customAmount || '0', 10)
    : formData.amount;

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if ((window as any).Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage('Please fill in your name, phone number, and email.');
      return;
    }

    if (!selectedAmount || selectedAmount < 100) {
      setErrorMessage('Minimum payment amount is ₹100.');
      return;
    }

    setLoading(true);
    trackConversion('Payment Start', {
      service: formData.service,
      amount: selectedAmount,
    });

    try {
      // 1. Create server-side Razorpay Order
      const orderRes = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          amount: selectedAmount,
        }),
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok || !orderData.success) {
        throw new Error(orderData.message || 'Failed to initiate payment.');
      }

      // Check if server is running in mock/demo mode without live Razorpay keys
      if (orderData.isMock) {
        // Direct mock verify for test demonstrations
        const verifyRes = await fetch('/api/payment/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            orderId: orderData.orderId,
            paymentId: `mock_pay_${Date.now()}`,
            signature: `mock_sig_${orderData.orderId}`,
          }),
        });

        const verifyData = await verifyRes.json();
        if (verifyData.success) {
          trackConversion('Payment Success', {
            paymentId: verifyData.payment.id,
            value: selectedAmount,
          });
          router.push(`/payment/success?paymentId=${verifyData.payment.id}`);
          return;
        } else {
          throw new Error('Test payment verification failed.');
        }
      }

      // 2. Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Could not load Razorpay gateway. Please check your internet connection.');
      }

      // 3. Open Razorpay Checkout modal
      const options = {
        key: orderData.keyId,
        amount: orderData.amount, // in paise
        currency: 'INR',
        name: SITE_CONFIG.name,
        description: `Consultancy Fee: ${formData.service}`,
        image: `${window.location.origin}/images/akme-logo.png`,
        order_id: orderData.orderId,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: '#E52329',
        },
        handler: async function (response: any) {
          try {
            // 4. Server-side verification
            const verifyRes = await fetch('/api/payment/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              trackConversion('Payment Success', {
                paymentId: verifyData.payment.id,
                value: selectedAmount,
              });
              router.push(`/payment/success?paymentId=${verifyData.payment.id}`);
            } else {
              trackConversion('Payment Failed', { orderId: response.razorpay_order_id });
              router.push(`/payment/failed?orderId=${response.razorpay_order_id}&reason=verification_failed`);
            }
          } catch (err: any) {
            router.push(`/payment/pending?orderId=${response.razorpay_order_id}`);
          }
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        trackConversion('Payment Failed', { reason: response.error?.description });
        setErrorMessage(response.error?.description || 'Payment was unsuccessful.');
        setLoading(false);
      });
      rzp.open();

    } catch (err: any) {
      setErrorMessage(err.message || 'Payment initiation failed.');
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-2xl mx-auto">
      {/* Header Banner */}
      <div className="bg-slate-50 border-b border-slate-200 text-slate-900 p-6 sm:p-8 relative">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-brand-red flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5" /> 256-Bit SSL Encrypted
          </span>
          <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-0.5 rounded-full border border-emerald-200">
            UPI / Cards / Netbanking
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Make a Secure Online Payment</h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Pay official AKME consultancy and language coaching fees securely via Razorpay.
        </p>
      </div>

      {/* Form Body */}
      <form onSubmit={handlePayment} className="p-6 sm:p-8 space-y-6">
        {errorMessage && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Payment Notice</p>
              <p className="text-xs mt-0.5">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Amount Selection */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Select Consultancy Service / Fee
          </label>
          <div className="space-y-2.5">
            {PRESET_AMOUNTS.map((preset) => (
              <div
                key={preset.amount}
                onClick={() => setFormData({ ...formData, amount: preset.amount, useCustomAmount: false })}
                className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                  !formData.useCustomAmount && formData.amount === preset.amount
                    ? 'border-brand-red bg-red-50/50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <p className="font-medium text-sm text-slate-900">{preset.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{preset.desc}</p>
                </div>
                <div className="text-right">
                  <span className="text-base font-bold text-slate-900">₹{preset.amount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            ))}

            {/* Custom Amount Option */}
            <div
              onClick={() => setFormData({ ...formData, useCustomAmount: true })}
              className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                formData.useCustomAmount
                  ? 'border-brand-red bg-red-50/50 shadow-sm'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm text-slate-900">Custom / Agreed Amount</span>
                <span className="text-xs text-slate-500">As advised by your counsellor</span>
              </div>
              {formData.useCustomAmount && (
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-base font-bold text-slate-700">₹</span>
                  <input
                    type="number"
                    min="100"
                    placeholder="Enter amount in INR"
                    value={formData.customAmount}
                    onChange={(e) => setFormData({ ...formData, customAmount: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-red font-semibold"
                    autoFocus
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* User Details */}
        <div className="space-y-4 pt-2 border-t border-slate-200">
          <h3 className="text-sm font-semibold text-slate-900">Payer Information</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Jaspreet Kaur"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number (WhatsApp) <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98155 12980"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Service Purpose
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white"
              >
                {SERVICES_LIST.map((s) => (
                  <option key={s.slug} value={s.title}>{s.title}</option>
                ))}
                <option value="Consultancy Retainer">Consultancy Retainer</option>
                <option value="IELTS / PTE Course Registration">IELTS / PTE Course Registration</option>
                <option value="Other Service">Other Verified Service</option>
              </select>
            </div>
          </div>
        </div>

        {/* Total Summary */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block">Total Payable</span>
            <span className="text-xs text-slate-400">Inclusive of GST & Gateway charges</span>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">
            ₹{selectedAmount ? selectedAmount.toLocaleString('en-IN') : 0}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !selectedAmount || selectedAmount < 100}
          className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-brand-red hover:bg-brand-redDark disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Connecting Secure Gateway...</span>
            </>
          ) : (
            <>
              <ShieldCheck className="w-5 h-5" />
              <span>Proceed to Pay ₹{selectedAmount ? selectedAmount.toLocaleString('en-IN') : 0}</span>
            </>
          )}
        </button>

        {/* Payment Methods Badges */}
        <div className="pt-2 text-center text-xs text-slate-400 space-y-2">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-1 font-medium text-slate-600">
              <QrCode className="w-3.5 h-3.5 text-emerald-600" /> UPI (GPay / PhonePe / Paytm)
            </span>
            <span>•</span>
            <span className="font-medium text-slate-600">Credit / Debit Cards</span>
            <span>•</span>
            <span className="font-medium text-slate-600">Net Banking</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Official Policy Notice: AKME Immigrations does not collect or process university tuition fees directly. Tuition fees must always be wired directly to the respective university.
          </p>
        </div>
      </form>
    </div>
  );
}
