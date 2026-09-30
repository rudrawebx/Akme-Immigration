import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | AKME Immigrations',
  description: 'Official refund and cancellation policy governing consultancy retainers, language coaching fees, and application services at AKME Immigrations, Patiala.',
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="border-b border-slate-200 pb-6 space-y-2">
            <span className="text-xs uppercase font-bold text-brand-red tracking-wider">
              Financial Terms
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 font-heading">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xs text-slate-400">
              Last Updated: September 2026 | {SITE_CONFIG.legalName}
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            <p>
              At <strong>{SITE_CONFIG.legalName}</strong>, we strive to deliver professional, transparent, and high-value consultancy and coaching services. This Refund & Cancellation Policy sets forth the terms governing payments made to AKME Immigrations.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">1. Initial Retainer & Advisory Fees</h2>
            <p>
              Consultancy retainer fees cover preliminary profile analysis, research on designated learning institutions, course eligibility audits, and document structuring. Once document evaluation or SOP drafting work has commenced, service retainer fees are non-refundable.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">2. Conditions Where Refunds Are Not Applicable</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong>Submission of Inaccurate or False Credentials:</strong> If an application is rejected due to fraudulent academic certificates, falsified work experience, or altered bank records provided by the client, no refund will be considered and services will be terminated.</li>
              <li><strong>Voluntary Client Withdrawal:</strong> If the client voluntarily withdraws or abandons the application process after agreement execution and file preparation, fees paid are non-refundable.</li>
              <li><strong>Failure to Attend Mandatory Appointments:</strong> If the client misses scheduled visa interview dates, biometric appointments, or medical examination appointments without reasonable cause, AKME Immigrations bears no financial liability.</li>
              <li><strong>Non-Communication or Abandonment:</strong> Files where the client ceases communication or fails to provide requested documents for a period exceeding 90 consecutive days shall be deemed abandoned.</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900 pt-2">3. Third-Party & University Payments</h2>
            <p>
              AKME Immigrations has no custody of university application fees, language examination fees (IDP / Pearson), credential assessment fees (WES), or government embassy visa charges. Refunds for these payments, if applicable, are governed solely by the independent refund policies of the respective educational institutions or government ministries.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">4. Classroom Coaching Batches (IELTS / PTE / Languages)</h2>
            <p>
              Students enrolling in IELTS, PTE, or language batches at our Patiala academy may request a batch transfer or reschedule prior to the commencement of the second class. Course fee refunds are not granted once classroom seat allocation and study material kits have been issued.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">5. Inquiries Regarding Refund Requests</h2>
            <p>
              Formal refund requests, where justified under mutual agreement, must be submitted in writing with original payment receipts to:
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
              <p><strong>Accounts & Grievances Desk:</strong> {SITE_CONFIG.legalName}</p>
              <p><strong>Email:</strong> {SITE_CONFIG.email}</p>
              <p><strong>Address:</strong> {SITE_CONFIG.address.full}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
