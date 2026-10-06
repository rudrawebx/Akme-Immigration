import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  Compass, 
  Clock, 
  FileText,
  ShieldCheck,
  BookOpen,
  Award
} from 'lucide-react';
import { SITE_CONFIG, STUDY_ABROAD_COUNTRIES } from '@/lib/config';
import AssessmentForm from '@/components/AssessmentForm';
import TrustStrip from '@/components/TrustStrip';

export const metadata: Metadata = {
  title: 'Study Abroad Programs & Visa Guidance in Patiala | AKME Immigrations',
  description: 'Explore study abroad opportunities across Canada, Australia, UK, Germany, France, Ireland, USA, and Europe. Comprehensive admission and student visa guidance at AKME Patiala, Opposite Punjabi University.',
};

export default function StudyAbroadPage() {
  return (
    <div className="bg-slate-50">
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 py-14 sm:py-20 relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-50 text-brand-red text-xs font-bold uppercase rounded-full border border-red-200">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Comprehensive Global Education Counselling</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
            Study Abroad with AKME Patiala
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose the right country, university, and academic course with expert admission guidance and legal student visa support — Opposite Punjabi University, Patiala.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/profile-assessment"
              className="px-6 py-3.5 bg-brand-red hover:bg-brand-redDark text-white font-bold rounded-xl shadow-md transition-colors inline-flex items-center gap-2 text-sm"
            >
              <span>Get Free Profile Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-200 shadow-2xs transition-colors inline-flex items-center gap-2 text-sm"
            >
              <MapPin className="w-4 h-4 text-brand-red" />
              <span>Visit Patiala Centre</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Main Grid: All 8 Countries */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Destinations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Top Global Study Destinations
          </h2>
          <p className="text-sm text-slate-600">
            Click on any country below to view admission requirements, costs, post-study work rights, and application procedures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDY_ABROAD_COUNTRIES.map((country) => (
            <div
              key={country.slug}
              className="group bg-white rounded-3xl border border-slate-200 hover:border-brand-red/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{country.flag}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                    {country.code}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-red transition-colors mb-1">
                  Study in {country.name}
                </h3>
                <p className="text-xs text-slate-600 mb-4 line-clamp-2">
                  {country.tagline}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-700">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Upcoming Intakes</span>
                    <span className="font-semibold text-slate-800">{country.intakes}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Tuition Estimate</span>
                    <span className="font-semibold text-slate-800">{country.avgTuition}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Work Permit</span>
                    <span className="font-semibold text-slate-800 line-clamp-1">{country.postStudyWork}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <Link
                  href={`/countries/${country.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-brand-red hover:text-white text-brand-red font-bold text-xs transition-colors border border-slate-200"
                >
                  <span>Detailed Country Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Counselling Workflow Notice */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Course & University Match</h4>
              <p className="text-xs text-slate-600 mt-1">Shortlisting programs aligned with your genuine previous academic record and long-term career goals.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Direct Institutional Payment</h4>
              <p className="text-xs text-slate-600 mt-1">Never pay tuition to consultancies. Wire tuition directly to foreign designated learning institutions.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Patiala Centre Support</h4>
              <p className="text-xs text-slate-600 mt-1">In-person assistance Opposite Punjabi University, Patiala with in-house IELTS and language lab coaching.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
