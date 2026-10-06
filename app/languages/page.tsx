import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Languages, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Globe, 
  BookOpen, 
  Users, 
  ShieldCheck,
  GraduationCap
} from 'lucide-react';
import { SITE_CONFIG, LANGUAGE_COURSES } from '@/lib/config';
import AssessmentForm from '@/components/AssessmentForm';
import TrustStrip from '@/components/TrustStrip';

export const metadata: Metadata = {
  title: 'Foreign Languages & Spoken English Training in Patiala | French & German - AKME',
  description: 'Certified French (A1-B2), German (A1-B2), and Spoken English training in Patiala Opposite Punjabi University. Prepare for DELF, TEF Canada, Goethe-Zertifikat, and university admissions.',
};

export default function LanguagesHubPage() {
  return (
    <div className="bg-slate-50">
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 py-14 sm:py-20 relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-50 text-brand-red text-xs font-bold uppercase rounded-full border border-red-200">
            <Languages className="w-3.5 h-3.5" />
            <span>Certified Foreign Language Institute in Patiala</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
            Foreign Languages & English Fluency
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Build internationally certified language proficiency with French, German, and Spoken English batches — taught by experienced faculty Opposite Punjabi University, Patiala.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/profile-assessment"
              className="px-6 py-3.5 bg-brand-red hover:bg-brand-redDark text-white font-bold rounded-xl shadow-md transition-colors inline-flex items-center gap-2 text-sm"
            >
              <span>Book a Demo Class</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-200 shadow-2xs transition-colors inline-flex items-center gap-2 text-sm"
            >
              <MapPin className="w-4 h-4 text-brand-red" />
              <span>Visit Patiala Academy</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Main Grid: All 3 Language Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Certified Levels
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Our Language Programs
          </h2>
          <p className="text-sm text-slate-600">
            Select a language course below to explore syllabus breakdown, CEFR levels (A1 to B2), exam patterns, and batch timings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LANGUAGE_COURSES.map((lang) => (
            <div
              key={lang.slug}
              className="group bg-white rounded-3xl border border-slate-200 hover:border-brand-red/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                    {lang.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                    {lang.levels}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-red transition-colors mb-2">
                  {lang.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {lang.shortDesc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>CEFR aligned European standards (A1, A2, B1, B2)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Certified trainers with interactive audio drills</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Supports study visas, PR points & job readiness</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <Link
                  href={lang.href}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-brand-red hover:text-white text-brand-red font-bold text-xs transition-colors border border-slate-200"
                >
                  <span>Batch Details & Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Value Proposition of Languages */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Study in Germany & France</h4>
              <p className="text-xs text-slate-600 mt-1">Qualify for tuition-free public universities in Germany and top Grandes Écoles in France with verified B1/B2 certificates.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Canada PR Points (TEF/TCF)</h4>
              <p className="text-xs text-slate-600 mt-1">Earn up to 50 additional Comprehensive Ranking System (CRS) points under Canada Express Entry French Category draws.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Interview & Public Confidence</h4>
              <p className="text-xs text-slate-600 mt-1">Our Spoken English and personality modules build professional fluency for university interviews and daily living abroad.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
