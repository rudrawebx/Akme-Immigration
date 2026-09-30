import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Calendar, 
  Clock, 
  FileCheck2, 
  ShieldCheck, 
  Users, 
  Globe, 
  Award,
  Sparkles,
  Star,
  Quote,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { SITE_CONFIG, COUNTRIES_LIST, SERVICES_LIST } from '@/lib/config';
import TrustStrip from '@/components/TrustStrip';
import CountryCard from '@/components/CountryCard';
import ServiceCard from '@/components/ServiceCard';
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion';
import AssessmentForm from '@/components/AssessmentForm';
import HeroSection from '@/components/HeroSection';

export const metadata = {
  title: 'AKME Immigrations | Study Visa & IELTS Coaching in Patiala',
  description: 'Your trusted partner for global education, study visas, visitor visas and language preparation in Patiala, Punjab.',
};

// Filter out Immigration & PR from the Homepage Services grid as requested
const HOMEPAGE_SERVICES = SERVICES_LIST.filter(s => s.slug !== 'immigration');

const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: "How do I choose the best country and course for my profile?",
    answer: "During our initial profile assessment, an AKME counsellor analyzes your previous academic qualifications, percentage, gap years (if any), budget, and English proficiency (IELTS/PTE) to match you with designated learning institutions that offer high visa approval rates and post-study work permits.",
  },
  {
    question: "Does AKME Immigrations charge fees for initial counselling?",
    answer: "No, the preliminary profile evaluation and eligibility assessment is completely free. We discuss suitable countries, courses, and intake timelines before any formal application begins.",
  },
  {
    question: "Do you provide coaching for IELTS and PTE in Patiala?",
    answer: "Yes, our state-of-the-art academy in Urban Estate Phase II, Patiala offers comprehensive IELTS Academic/General and PTE Academic coaching with dedicated computer labs, certified trainers, and regular mock exams.",
  },
  {
    question: "Can I apply for a study visa with study gaps or previous visa refusals?",
    answer: "Yes. Many countries accept justified study or work gaps with legitimate experience certificates, salary accounts, and tax returns. We specialize in handling complicated cases and prior refusals by preparing robust Statements of Purpose (SOP) and addressing previous concerns transparently.",
  },
  {
    question: "How do I pay university tuition fees?",
    answer: "AKME Immigrations adheres to strict ethical compliance: students always transfer university tuition fees and government visa charges directly to the certified foreign university or respective embassy via official banking wire/Flywire/Convera channels. We do not collect tuition fees into private consultancy accounts.",
  },
];

const VERIFIED_REVIEWS = [
  {
    name: "Manpreet Kaur",
    location: "Mohali / Patiala",
    service: "IELTS Coaching & Canada Study Visa",
    rating: 5,
    text: "I achieved 7.5 bands in IELTS after enrolling at AKME. The faculty gave special attention to my writing module. Their visa filing team assisted me through every step of my Canadian college admission.",
  },
  {
    name: "Rakesh Sharma",
    location: "Amritsar",
    service: "Son's UK Study Visa & Financial Guidance",
    rating: 5,
    text: "Sanjeev sir and the team guided us through the entire financial documentation for my son's UK study visa. Their transparency regarding college deposits and CAS issuance gave us immense peace of mind.",
  },
  {
    name: "Sahil Verma",
    location: "Patiala",
    service: "Australia Subclass 500 Visa",
    rating: 5,
    text: "Got my Australian study visa granted without any hassle. From course selection in Melbourne to Genuine Temporary Entrant (GS) documentation, AKME provided accurate and prompt support.",
  },
];

const RECENT_BLOGS = [
  {
    slug: "canada-study-permit-updates",
    title: "Canada Study Permit & PGWP Changes: Complete Guide for Indian Students",
    date: "September 2026",
    category: "Canada Visa",
    desc: "Understanding provincial attestation letters (PAL), eligible degree programs, and updated spouse open work permit regulations.",
  },
  {
    slug: "australia-student-visa-subclass-500",
    title: "Australia Subclass 500 Student Visa: New Financial Requirements & GS Criteria",
    date: "September 2026",
    category: "Australia Visa",
    desc: "A breakdown of the Genuine Student (GS) assessment and essential documentation needed for Australian universities.",
  },
  {
    slug: "germany-public-universities-guide",
    title: "How to Study in Germany Tuition-Free: APS Certificate & Blocked Account Setup",
    date: "August 2026",
    category: "Europe Education",
    desc: "Step-by-step roadmap for Indian graduates applying to German public universities with zero tuition fees.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION WITH VIDEO SHOWCASE & ASSESSMENT */}
      <HeroSection />

      {/* 2. TRUST STRIP */}
      <TrustStrip />

      {/* 3. CORE SERVICES SECTION (Immigration & PR removed from this section as requested) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Our Professional Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 font-heading">
              Comprehensive Visa & Education Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              From university course selection to visa filing and certified language prep, AKME provides structured end-to-end guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOMEPAGE_SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                shortDesc={service.shortDesc}
                badge={service.badge}
                iconName={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. POPULAR STUDY DESTINATIONS (Using updated Canada photo) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
                Top Destinations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 font-heading">
                Explore Global Study & Settlement Options
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                We assist with university admissions and student visas across leading English-speaking and European study hubs.
              </p>
            </div>
            <Link
              href="/countries"
              className="inline-flex items-center gap-1 text-sm font-bold text-brand-red hover:text-brand-redDark group"
            >
              <span>View All Countries</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {COUNTRIES_LIST.slice(0, 4).map((country) => (
              <CountryCard
                key={country.slug}
                slug={country.slug}
                name={country.name}
                code={country.code}
                tagline={country.tagline}
                intakes={country.intakes}
                postStudyWork={country.postStudyWork}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE AKME IMMIGRATIONS (Clean Light Design - No Blue/Black) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
                The AKME Standard
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 leading-tight">
                Ethical Counselling Built on Verification & Clarity
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Overseas education and visa policies are continuously evolving. At AKME Immigrations, we avoid gimmicks and focus on verified institution lists, genuine documentation, and authentic candidate eligibility.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-100">
                    <CheckCircle2 className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Direct Institutional Payments</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">All tuition fee transactions are remitted directly from the student's or sponsor's bank account to the educational institution.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-100">
                    <CheckCircle2 className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">In-House Language Laboratory</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">IELTS, PTE, and German language training delivered by certified instructors right at our Patiala academy.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-100">
                    <CheckCircle2 className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Refusal Case Analysis</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">In-depth case auditing for candidates who have faced visa refusals, providing clear actionable solutions.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:underline"
                >
                  <span>Learn more about our team & Patiala office</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Feature Card (Clean Light Style) */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                  Our Step-by-Step Pathway
                </h3>
                <ol className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs flex-shrink-0">1</span>
                    <div>
                      <strong className="text-slate-900 block">Profile Assessment</strong>
                      <span className="text-slate-600 text-xs">Review of academic background, gaps, and test scores.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs flex-shrink-0">2</span>
                    <div>
                      <strong className="text-slate-900 block">Counselling & Country Selection</strong>
                      <span className="text-slate-600 text-xs">Selecting the right country, university, and eligible intake.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs flex-shrink-0">3</span>
                    <div>
                      <strong className="text-slate-900 block">Course & Offer Letter Lodgment</strong>
                      <span className="text-slate-600 text-xs">Securing offer letters from verified foreign institutions.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs flex-shrink-0">4</span>
                    <div>
                      <strong className="text-slate-900 block">Documentation & Financial Audit</strong>
                      <span className="text-slate-600 text-xs">Preparation of statements, funds proof, and SOP drafting.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs flex-shrink-0">5</span>
                    <div>
                      <strong className="text-slate-900 block">Visa Application Submission</strong>
                      <span className="text-slate-600 text-xs">Formal filing on official high commission portals.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs flex-shrink-0">6</span>
                    <div>
                      <strong className="text-slate-900 block">Visa Decision & Pre-Departure</strong>
                      <span className="text-slate-600 text-xs">Passport stamping, accommodation advice, and travel briefing.</span>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. VERIFIED CLIENT EXPERIENCES */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Candidate Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 font-heading">
              Authentic Student & Family Experiences
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Verified testimonials from candidates who received study visas and coaching guidance through AKME Immigrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VERIFIED_REVIEWS.map((review, i) => (
              <div 
                key={i} 
                className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-red-200 mb-2" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-brand-red font-semibold">{review.service}</p>
                  <p className="text-[11px] text-slate-400">{review.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-800 bg-slate-50 border border-slate-200 hover:border-brand-red hover:text-brand-red shadow-sm transition-all"
            >
              <span>View More Success Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. PROFILE ASSESSMENT CALLOUT */}
      <section className="py-16 bg-brand-red text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading">
            Not Sure Which Visa or Study Option Fits You?
          </h2>
          <p className="text-sm sm:text-base text-red-100 max-w-2xl mx-auto leading-relaxed">
            Every candidate’s situation is unique. Speak directly with our Patiala counsellors to evaluate your qualification, funds, and target intake.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/profile-assessment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-xl transition-all"
            >
              <span>Check Your Eligibility</span>
              <ArrowRight className="w-5 h-5 text-brand-red" />
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-600 text-white" />
              <span>WhatsApp an Advisor</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. LATEST NEWS & BLOG ARTICLES */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
                Immigration Insights
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 font-heading">
                Latest Visa Updates & Educational Guides
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-bold text-brand-red hover:underline"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RECENT_BLOGS.map((blog) => (
              <div
                key={blog.slug}
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-brand-red/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-bold text-brand-red bg-red-50 px-2 py-0.5 rounded border border-red-100">
                      {blog.category}
                    </span>
                    <span>{blog.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 hover:text-brand-red transition-colors">
                    <Link href={`/blog#${blog.slug}`}>{blog.title}</Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {blog.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    href={`/blog#${blog.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION (Light Background) */}
      <FAQAccordion items={HOMEPAGE_FAQS} />

      {/* 10. OFFICE LOCATION & CONTACT DETAILS (Clean Light Design - No Blue/Black) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
                Visit Our Patiala Centre
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900">
                Walk In for In-Person Counselling & IELTS Prep
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Conveniently located on Rajpura Road near Vardhman Hospital in Urban Estate Phase II. Meet our experienced counsellors and view our coaching facilities.
              </p>

              <div className="space-y-4 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Patiala Head Office</strong>
                    <span className="text-slate-600 text-xs sm:text-sm">{SITE_CONFIG.address.full}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <Phone className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Direct Consultation Helpline</strong>
                    <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-brand-red font-bold hover:underline">
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <Clock className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Centre Timings</strong>
                    <span className="text-slate-600">{SITE_CONFIG.hours.days}: {SITE_CONFIG.hours.time}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={SITE_CONFIG.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-red hover:bg-brand-redDark shadow-md transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm transition-colors"
                >
                  <span>All Contact Details</span>
                </Link>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="lg:col-span-6 h-[340px] sm:h-[420px] rounded-3xl overflow-hidden border border-slate-200 shadow-md relative bg-white p-2">
              <iframe
                title="AKME Immigrations Patiala Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4079860228393!2d76.4172!3d30.3425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028e3b1234567%3A0x123456789abcdef!2sUrban%20Estate%20Phase%20II%2C%20Patiala%2C%20Punjab!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* 11. FINAL CONVERSION CTA */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Start Your Journey Today
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Take the first step toward your global degree or travel with verified guidance from AKME Immigrations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/profile-assessment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-brand-red hover:bg-brand-redDark shadow-lg transition-all"
            >
              <span>Free Profile Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-300 transition-colors"
            >
              <span>Contact AKME</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
