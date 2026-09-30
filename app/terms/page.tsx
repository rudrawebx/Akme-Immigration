import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/config';
import { ShieldCheck, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | AKME Immigrations & Education',
  description: 'Official Terms of Service and user agreement governing consultations, advisory services, and website use with AKME Immigrations, Patiala.',
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="border-b border-slate-200 pb-6 space-y-2">
            <span className="text-xs uppercase font-bold text-brand-red tracking-wider">
              User Agreement
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 font-heading">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-400">
              Effective Date: September 2026 | {SITE_CONFIG.legalName}
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            <p>
              Welcome to the official web portal of <strong>{SITE_CONFIG.legalName}</strong> ("AKME Immigrations", "we", "us", or "our"). By browsing this website, scheduling a profile assessment, or engaging our consultancy services, you agree to comply with and be bound by the following Terms and Conditions.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">1. Scope of Advisory Services</h2>
            <p>
              AKME Immigrations operates exclusively as an overseas educational guidance, admissions advisory, and visa documentation support service provider. Information published on this site or communicated during counselling sessions is for educational guidance and does not constitute formal immigration legal advice or government affiliation.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">2. Direct University Tuition Fee Policy</h2>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs sm:text-sm text-amber-900 space-y-1">
              <p className="font-bold">Mandatory Transaction Rule:</p>
              <p>
                All tuition fees, university application fees, and mandatory deposit charges payable to designated educational institutions abroad must be remitted directly by the client/sponsor from their bank to the official bank account of the institution. <strong>AKME Immigrations does not collect, hold, transfer, or process university tuition fees through private accounts.</strong>
              </p>
            </div>

            <h2 className="text-lg font-bold text-slate-900 pt-2">3. Statutory Visa Decisions & Outcome Disclaimers</h2>
            <p>
              Visa outcomes depend entirely on individual merits, documentary veracity, and the statutory discretion of the respective embassy or immigration department. <strong>AKME Immigrations cannot and does not guarantee visa issuance.</strong> Any representation suggesting a guaranteed visa approval is strictly unauthorized and invalid.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">4. Accuracy of Client Documentation</h2>
            <p>
              Clients are strictly responsible for providing authentic, legitimate, and unaltered academic credentials, bank statements, and employment letters. Submitting fraudulent papers to an embassy constitutes a serious legal offense; AKME Immigrations reserves the right to terminate services immediately without refund if fraudulent submissions are detected.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">5. Intellectual Property Rights</h2>
            <p>
              All trademarks, logos, monograms, text, graphics, and layout elements on this website are the proprietary property of {SITE_CONFIG.legalName} and protected under Indian intellectual property laws. Unauthorized reproduction, modification, or distribution is prohibited.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">6. Jurisdiction & Dispute Resolution</h2>
            <p>
              These Terms of Service are governed by the laws of India. Any disputes arising in connection with services provided by AKME Immigrations shall be subject to the exclusive jurisdiction of the competent courts in Patiala, Punjab.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
