import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  BookOpen,
  GraduationCap,
  FileCheck2,
  Languages,
  Clock
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';
import TrustStrip from '@/components/TrustStrip';

export const metadata: Metadata = {
  title: 'About AKME Immigrations & Education | Patiala Institute',
  description: "Learn about AKME Immigrations & Education, Patiala's trusted immigration & education institute located Opposite Punjabi University, Patiala. Our mission, verified counselling, in-house language academy, and ethical visa guidance.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 py-14 sm:py-20 relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-50 text-brand-red text-xs font-bold uppercase rounded-full border border-red-200">
            <MapPin className="w-3.5 h-3.5" />
            <span>Patiala's Trusted Immigration & Education Institute</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
            AKME Immigrations & Education
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Headquartered Opposite Punjabi University, Patiala, AKME is dedicated to guiding students and families with complete legal transparency, personalized admissions, and verified documentation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Our Identity & Mission
            </span>
            <h2 className="text-3xl font-bold text-slate-900 font-heading">
              A Transparent Alternative to Overseas Misinformation
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Founded on the principles of ethics and accountability, AKME Immigrations operates from its centre located <strong>Opposite Punjabi University, Patiala</strong>. We believe that choosing to study or settle abroad is a life-defining family investment that deserves meticulous care rather than false shortcuts.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Unlike agencies that rely on aggressive marketing or fabricated visa guarantees, AKME adheres to strict statutory guidelines. We verify institution credentials, guide direct student-to-university fee transactions, and empower candidates with rigorous language training through our in-house academy.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">Personalized evaluation by senior counsellors with extensive case handling experience.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">Zero university tuition fee handling — 100% direct bank wire to recognized foreign institutions.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">In-house state-of-the-art language labs for IELTS, PTE Academic, German, and French.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
              <div className="relative h-20 w-64 mx-auto">
                <Image
                  src="/images/akme-logo.png"
                  alt="Official AKME Immigrations Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="space-y-3.5 border-t border-slate-100 pt-6 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Centre Location</strong>
                    <span className="text-xs text-slate-600">SCO 31, Opp. Punjab &amp; Sind Bank, Walia Enclave, Opp. Punjabi University, Patiala</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <div>
                    <strong className="block text-slate-900">Official Helpline</strong>
                    <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-xs text-brand-red font-semibold hover:underline">
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <div>
                    <strong className="block text-slate-900">Official Correspondence</strong>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-xs text-slate-600 hover:underline">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  <div>
                    <strong className="block text-slate-900">Working Hours</strong>
                    <span className="text-xs text-slate-600">{SITE_CONFIG.hours.days}: {SITE_CONFIG.hours.time}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-brand-red hover:bg-brand-redDark transition-colors text-center"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Visit Patiala Centre</span>
                </Link>
                <Link
                  href="/profile-assessment"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors text-center"
                >
                  <span>Free Assessment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
              Our Core Operating Principles
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Clear commitments that define every candidate engagement at AKME Immigrations & Education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-brand-red flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="font-bold text-slate-900 text-base">Verifiable Facts Only</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We present realistic admission criteria and authentic fee schedules. We never fabricate visa guarantee statistics or misrepresent government processing timelines.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-brand-red flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="font-bold text-slate-900 text-base">Client Financial Security</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tuition fees are remitted directly from the student's family account to the foreign university. Our clients maintain complete transparency over their financial transactions.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-brand-red flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="font-bold text-slate-900 text-base">Rigorous Quality Preparation</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From daily personalized IELTS and PTE lab drills to thorough Statement of Purpose (SOP) reviews, we ensure candidates meet international standards before lodging files.
              </p>
            </div>
          </div>
        </div>

      </div>

      <TrustStrip />
    </div>
  );
}
