import { Metadata } from 'next';
import Link from 'next/link';
import { 
  BookOpen, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Award, 
  Laptop, 
  Users, 
  ShieldCheck,
  Languages
} from 'lucide-react';
import { SITE_CONFIG, TEST_PREPARATION_COURSES } from '@/lib/config';
import AssessmentForm from '@/components/AssessmentForm';
import TrustStrip from '@/components/TrustStrip';

export const metadata: Metadata = {
  title: 'Test Preparation in Patiala | IELTS, PTE, CELPIP, CAEL, GRE, Duolingo - AKME',
  description: 'In-house test preparation academy Opposite Punjabi University, Patiala. Computer lab scoring, certified trainers, and structured batches for IELTS, PTE, CELPIP, CAEL, GRE, and Duolingo.',
};

export default function TestPreparationHubPage() {
  return (
    <div className="bg-slate-50">
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 py-14 sm:py-20 relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-50 text-brand-red text-xs font-bold uppercase rounded-full border border-red-200">
            <BookOpen className="w-3.5 h-3.5" />
            <span>In-House Testing Academy & Computer Labs</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
            Test Preparation in Patiala
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Prepare confidently for international language and admissions tests with dedicated computer labs, authentic test simulations, and certified trainers — Opposite Punjabi University, Patiala.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/profile-assessment"
              className="px-6 py-3.5 bg-brand-red hover:bg-brand-redDark text-white font-bold rounded-xl shadow-md transition-colors inline-flex items-center gap-2 text-sm"
            >
              <span>Book a Free Diagnostic Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-200 shadow-2xs transition-colors inline-flex items-center gap-2 text-sm"
            >
              <MapPin className="w-4 h-4 text-brand-red" />
              <span>Visit Lab Centre</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Main Grid: All 6 Test Prep Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Course Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Examinations We Train For
          </h2>
          <p className="text-sm text-slate-600">
            Whether applying for undergraduate college diplomas, Master's degrees, or Canadian PR immigration points, select your exam below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEST_PREPARATION_COURSES.map((course) => (
            <div
              key={course.slug}
              className="group bg-white rounded-3xl border border-slate-200 hover:border-brand-red/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {course.badge}
                  </span>
                  <BookOpen className="w-5 h-5 text-slate-400 group-hover:text-brand-red transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-red transition-colors mb-2">
                  {course.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {course.shortDesc}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Daily mock tests & timed sectional drills</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Individual 1-on-1 speaking cabins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Updated Pearson/Cambridge official question bank</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <Link
                  href={course.href}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-brand-red hover:text-white text-brand-red font-bold text-xs transition-colors border border-slate-200"
                >
                  <span>Detailed Course Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Lab Infrastructure Strip */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Computerized Testing Lab</h4>
              <p className="text-xs text-slate-600 mt-1">High-speed terminals with noise-cancelling headphones replicating Pearson and ETS test centre conditions.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Small Batch Sizes</h4>
              <p className="text-xs text-slate-600 mt-1">Ensuring individualized trainer feedback on writing tasks, essay structure, and pronunciation nuances.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Legitimate Prep Strategy</h4>
              <p className="text-xs text-slate-600 mt-1">No fake score guarantees. We focus on real diagnostic improvements, lexical resources, and grammar accuracy.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
