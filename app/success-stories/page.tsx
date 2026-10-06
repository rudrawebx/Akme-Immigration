import { Metadata } from 'next';
import Link from 'next/link';
import { Star, Quote, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import TrustStrip from '@/components/TrustStrip';

export const metadata: Metadata = {
  title: 'Client Experiences & Success Stories | AKME Immigrations',
  description: 'Read verified experiences from students and families guided by AKME Immigrations for study visas, IELTS coaching, and overseas admissions.',
};

const SUCCESS_STORIES = [
  {
    name: "Manpreet Kaur",
    location: "Mohali / Patiala",
    service: "IELTS Coaching & Canada Study Visa",
    country: "Canada",
    date: "July 2026",
    rating: 5,
    text: "I achieved 7.5 bands in IELTS after enrolling at AKME's Patiala academy. The faculty gave special attention to my writing module. Their visa filing team assisted me through every step of my Canadian college admission and PAL documentation with complete clarity.",
  },
  {
    name: "Rakesh Sharma",
    location: "Amritsar",
    service: "Financial Guidance & UK Study Visa",
    country: "United Kingdom",
    date: "May 2026",
    rating: 5,
    text: "Sanjeev sir and the team guided us through the entire financial documentation for my son's UK study visa. Their transparency regarding 28-day maintenance funds and CAS issuance gave our family immense confidence. Everything was handled systematically.",
  },
  {
    name: "Sahil Verma",
    location: "Patiala",
    service: "Australia Subclass 500 Visa",
    country: "Australia",
    date: "April 2026",
    rating: 5,
    text: "Got my Australian study visa granted without any hassle. From course selection in Melbourne to Genuine Student (GS) documentation, AKME provided accurate and prompt support at every phase.",
  },
  {
    name: "Anil & Neha Verma",
    location: "Delhi / Punjab",
    service: "European Tourist / Visitor Visa",
    country: "Europe (Schengen)",
    date: "June 2026",
    rating: 5,
    text: "We applied for a tourist visa to Europe and had many questions regarding insurance, itinerary, and financial affidavits. AKME handled every document with precision and our visas were stamped smoothly.",
  },
  {
    name: "Taranpreet Kaur",
    location: "Patiala",
    service: "PTE Academic Coaching & New Zealand Visa",
    country: "New Zealand",
    date: "March 2026",
    rating: 5,
    text: "The computer lab for PTE at AKME is excellent. The mock score reports were very accurate compared to the actual Pearson exam. I scored 67 and secured my admission to Auckland effortlessly.",
  },
];

export default function SuccessStoriesPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Candidate Testimonials
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading">
            Candidate Experiences
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Authentic feedback from students and families who entrusted AKME Immigrations with their educational admissions and visa applications.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUCCESS_STORIES.map((story, i) => (
            <div 
              key={i}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(story.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {story.country}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-red-100 mb-3" />

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{story.text}"
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 space-y-1">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">{story.name}</h4>
                <p className="text-xs font-semibold text-brand-red">{story.service}</p>
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>{story.location}</span>
                  <span>{story.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 text-center max-w-4xl mx-auto space-y-6 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-brand-red flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 font-heading">
            Ready to Begin Your Overseas Academic Journey?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Our team Opposite Punjabi University, Patiala is ready to evaluate your qualifications and help you make an informed decision.
          </p>
          <div>
            <Link
              href="/profile-assessment"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-brand-red hover:bg-brand-redDark shadow transition-colors"
            >
              <span>Request Free Profile Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
      <div className="mt-16">
        <TrustStrip />
      </div>
    </div>
  );
}
