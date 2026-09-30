import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import TrustStrip from '@/components/TrustStrip';

export const metadata: Metadata = {
  title: 'Immigration & Study Visa Insights, News & Guides | AKME Immigrations',
  description: 'Stay updated with the latest study visa rules, post-graduation work permit policies, IELTS strategies, and embassy guidelines from AKME Immigrations, Patiala.',
};

const ARTICLES = [
  {
    slug: "canada-study-permit-updates",
    title: "Canada Study Permit & PGWP Changes: Complete Guide for Indian Students",
    category: "Canada Visa",
    date: "September 2026",
    readTime: "5 min read",
    summary: "IRCC has introduced key policy updates including Provincial Attestation Letters (PAL) for undergraduate applicants, targeted field-of-study rules for Post-Graduation Work Permits (PGWP), and revised Spousal Open Work Permit eligibility.",
    content: [
      "The Canadian international education landscape has introduced structural changes to maintain system integrity. The most critical update for undergraduate students is the Provincial Attestation Letter (PAL) requirement, which must accompany your study permit application.",
      "Furthermore, applicants targeting Master's and doctoral degrees enjoy streamlined processing and exemptions from provincial caps. Master's graduates continue to qualify for 3-year PGWP permits, regardless of whether their academic degree was 1 or 2 years in length.",
      "At AKME Immigrations, our counsellors ensure your designated learning institution (DLI) and chosen course align with long-term PGWP eligibility."
    ]
  },
  {
    slug: "australia-student-visa-subclass-500",
    title: "Australia Subclass 500 Student Visa: New Financial Requirements & GS Criteria",
    category: "Australia Visa",
    date: "September 2026",
    readTime: "6 min read",
    summary: "The Department of Home Affairs has updated the minimum living cost requirement to AUD $29,710 and transitioned from the GTE statement to the structured Genuine Student (GS) assessment framework.",
    content: [
      "Australia's migration strategy places central emphasis on the 'Genuine Student' (GS) assessment. The GS questions evaluate an applicant's current educational and financial circumstances, value of the course to their future career, and realistic economic ties to India.",
      "Financial proof must demonstrate unencumbered funds covering one full year of tuition, AUD $29,710 in living expenses, and AUD $2,000 for travel. Acceptable funds include verified bank savings held for minimum duration or approved educational bank loans."
    ]
  },
  {
    slug: "germany-public-universities-guide",
    title: "How to Study in Germany Tuition-Free: APS Certificate & Blocked Account Setup",
    category: "Europe Higher Ed",
    date: "August 2026",
    readTime: "5 min read",
    summary: "Germany's public university system offers world-class degrees with zero tuition charges. Learn the exact process for obtaining the mandatory APS verification and funding a €11,208 blocked account.",
    content: [
      "Unlike tuition-heavy destinations, German public universities charge only nominal semester contributions (typically €250 to €350 per term). Indian graduates with strong academic percentages in engineering, computer science, and natural sciences can secure globally recognized master's degrees without burdensome student debt.",
      "All Indian applicants must first undergo the APS (Akademische Prüfstelle) verification process administered by the German Embassy New Delhi. Additionally, students must set up a blocked account (Sperrkonto) holding €11,208 to verify living expenses."
    ]
  },
  {
    slug: "ielts-vs-pte-comparison",
    title: "IELTS vs PTE: Which Test Should You Take for Canada and Australia?",
    category: "Language Exams",
    date: "August 2026",
    readTime: "4 min read",
    summary: "A practical breakdown comparing computer-delivered PTE Academic with IELTS Academic in terms of scoring criteria, preparation timeline, and visa acceptance.",
    content: [
      "Both IELTS and PTE are internationally recognized English proficiency benchmarks, but they suit different test-taker profiles. PTE Academic is 100% evaluated by AI speech and language algorithms, making it highly objective and providing fast turnaround (often within 48 hours).",
      "IELTS, administered by IDP and the British Council, uses certified human examiners for the Speaking interview and Writing module. At AKME's Patiala academy, our instructors conduct initial diagnostic checks to advise which exam aligns best with your strengths."
    ]
  },
];

export default function BlogPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Official Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading">
            Immigration & Visa Insights
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Authentic, verified guidance on foreign embassy regulations, admissions requirements, and language exam preparation.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {ARTICLES.map((article) => (
            <article 
              key={article.slug}
              id={article.slug}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-brand-red/30 transition-all space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-brand-red bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading leading-snug">
                {article.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {article.summary}
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {article.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">Written by AKME Visa Advisory Desk</span>
                <Link
                  href="/profile-assessment"
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-red hover:underline"
                >
                  <span>Evaluate Your Eligibility</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
      <div className="mt-16">
        <TrustStrip />
      </div>
    </div>
  );
}
