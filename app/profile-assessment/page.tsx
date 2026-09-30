import { Metadata } from 'next';
import AssessmentForm from '@/components/AssessmentForm';
import TrustStrip from '@/components/TrustStrip';
import { ShieldCheck, CheckCircle2, Clock, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Profile Assessment | AKME Immigrations Patiala',
  description: 'Submit your profile for a free eligibility evaluation for Canada, Australia, UK, USA, and European study visas and immigration programs.',
};

export default function ProfileAssessmentPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Confidential & Free Evaluation
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading">
            Free Profile Assessment
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Provide your academic background, test scores, and target country. An experienced AKME counsellor will evaluate your eligibility and outline realistic study visa or PR options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: What to expect & Trust info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900 font-heading">
                What Happens Next?
              </h2>

              <ol className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs flex-shrink-0">1</span>
                  <div>
                    <strong className="block text-slate-900">Lead ID Generation</strong>
                    <span className="text-xs text-slate-500">You instantly receive an AKME inquiry reference number for direct follow-up.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs flex-shrink-0">2</span>
                  <div>
                    <strong className="block text-slate-900">Counsellor Review</strong>
                    <span className="text-xs text-slate-500">Your education, gaps, and language test results are matched against current visa quotas and entry criteria.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs flex-shrink-0">3</span>
                  <div>
                    <strong className="block text-slate-900">Detailed Roadmap Discussion</strong>
                    <span className="text-xs text-slate-500">We schedule a phone call, WhatsApp review, or in-person session at our Patiala office to present recommendations.</span>
                  </div>
                </li>
              </ol>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                  Documents You May Keep Handy
                </h3>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Class 10th & 12th Marksheets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Graduation Degree & Semester Transcripts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>IELTS / PTE Test Report (if completed)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Work Experience Letters / Payslips (if working)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Strict Privacy Guarantee:</strong> Your phone number and email are exclusively used for this consultation. We never sell or share candidate data with third-party telemarketers.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Full Assessment Form */}
          <div className="lg:col-span-7">
            <AssessmentForm
              title="Personal Details & Preferences"
              subtitle="Please provide accurate information for an authentic assessment."
            />
          </div>

        </div>

      </div>
      <div className="mt-16">
        <TrustStrip />
      </div>
    </div>
  );
}
