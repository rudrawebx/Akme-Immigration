import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/config';
import { ShieldCheck, Lock, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | AKME Immigrations & Education',
  description: 'Official privacy policy for AKME Immigrations. How candidate personal data, phone numbers, and academic records are protected.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="border-b border-slate-200 pb-6 space-y-2">
            <span className="text-xs uppercase font-bold text-brand-red tracking-wider">
              Legal Compliance
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 font-heading">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-400">
              Last Updated: September 2026 | {SITE_CONFIG.legalName}
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            <p>
              At <strong>{SITE_CONFIG.legalName}</strong> (referred to as "AKME Immigrations", "we", "us", or "our"), safeguarding your personal information is paramount. This Privacy Policy outlines our standards concerning the collection, storage, handling, and protection of information gathered through our website (<a href={SITE_CONFIG.url} className="text-brand-red underline">{SITE_CONFIG.url}</a>) and in-person consultations at our Patiala office.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">1. Information We Collect</h2>
            <p>
              When you submit a Free Profile Assessment, register for IELTS/PTE classes, or initiate an online payment, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong>Contact Information:</strong> Full name, telephone/WhatsApp number, email address, and residential city.</li>
              <li><strong>Academic & Professional Details:</strong> Educational qualifications, passing years, academic marksheets, IELTS/PTE/language test scorecards, and work experience.</li>
              <li><strong>Application Preferences:</strong> Target study country, preferred degree programs, and estimated financial budget.</li>
              <li><strong>Technical & Analytics Data:</strong> IP address, device type, browser information, UTM referral parameters, and pages visited.</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900 pt-2">2. How We Use Your Information</h2>
            <p>
              Candidate information is used solely for genuine educational guidance and immigration assessment, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Assessing course eligibility across designated learning institutions (DLIs).</li>
              <li>Connecting you with an assigned counsellor via telephone, email, or WhatsApp.</li>
              <li>Processing official admission applications with your prior authorization.</li>
              <li>Generating receipts for consultancy fees and maintaining statutory accounting records.</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900 pt-2">3. Zero Third-Party Selling Policy</h2>
            <p>
              <strong>We do not sell, rent, trade, or distribute your personal details to commercial third-party marketing brokers.</strong> Your details are only shared with official educational institutions, credential assessment bodies (such as WES), or statutory visa portals upon your explicit instruction.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">4. Data Security</h2>
            <p>
              We implement industry-standard 256-bit SSL encryption for data in transit and restricted server access controls for stored candidate records. Payment transactions are processed via Razorpay's PCI-DSS Level 1 compliant gateway; AKME Immigrations never stores customer card numbers or banking passwords.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">5. Contacting the Grievance Officer</h2>
            <p>
              For inquiries regarding data access, corrections, or erasure requests, contact our compliance desk:
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
              <p><strong>Compliance Officer:</strong> AKME Immigrations & Education</p>
              <p><strong>Address:</strong> {SITE_CONFIG.address.full}</p>
              <p><strong>Email:</strong> {SITE_CONFIG.email}</p>
              <p><strong>Phone:</strong> {SITE_CONFIG.phoneDisplay}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
