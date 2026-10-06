import { Metadata } from 'next';
import Link from 'next/link';
import { 
  GraduationCap, 
  FileCheck2, 
  BookOpen, 
  Languages, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageCircle,
  HelpCircle,
  Clock,
  ShieldCheck,
  Star,
  Globe,
  Award
} from 'lucide-react';
import { 
  SITE_CONFIG, 
  PRIMARY_SERVICE_PILLARS, 
  STUDY_ABROAD_COUNTRIES, 
  IMMIGRATION_SERVICES, 
  TEST_PREPARATION_COURSES, 
  LANGUAGE_COURSES 
} from '@/lib/config';
import HeroSection from '@/components/HeroSection';
import TrustStrip from '@/components/TrustStrip';
import CountryCard from '@/components/CountryCard';
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'AKME Immigrations & Education | Immigration & Study Abroad Consultant in Patiala',
  description: "Patiala's Trusted Immigration & Education Institute — Opposite Punjabi University, Patiala. Comprehensive guidance for Study Abroad (Canada, UK, Australia, Germany, France, USA), Immigration & PR, IELTS/PTE Coaching, and French/German Language training.",
  keywords: [
    'AKME Immigrations Patiala',
    'Immigration Consultant Patiala',
    'Study Abroad Consultant Patiala',
    'IELTS Institute Patiala',
    'PTE Coaching Patiala',
    'Canada Immigration Consultant Patiala',
    'Australia Immigration Consultant Patiala',
    'Study Visa Consultant Patiala',
    'French Classes Patiala',
    'German Classes Patiala',
    'Immigration Consultant Near Punjabi University Patiala',
  ],
  alternates: {
    canonical: 'https://akmeimmigrations.com',
  },
  openGraph: {
    title: 'AKME Immigrations & Education | Patiala',
    description: 'Study Abroad, Immigration, Test Preparation & Foreign Language Training — Opposite Punjabi University, Patiala.',
    url: 'https://akmeimmigrations.com',
    siteName: 'AKME Immigrations & Education',
    locale: 'en_IN',
    type: 'website',
  },
};

const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: "Where is AKME Immigrations & Education located in Patiala?",
    answer: "Our new centre is prominently located Opposite Punjabi University, Patiala, Punjab. Students can easily walk in for in-person academic counselling, document evaluation, and language laboratory demo sessions.",
  },
  {
    question: "What four core services does AKME Immigrations & Education provide?",
    answer: "AKME brings four primary pillars all under one roof in Patiala: 1) Study Abroad admissions and student visas, 2) Immigration, PR & visitor visa pathways, 3) Test Preparation for IELTS, PTE, CELPIP, CAEL, GRE & Duolingo, and 4) Foreign Language Training in French, German (A1-B2) and Spoken English.",
  },
  {
    question: "Does AKME charge any fee for the initial profile evaluation?",
    answer: "No. Our preliminary profile assessment and country/course eligibility check is 100% free of cost. Our counsellors evaluate your academic scores, backlog history, gaps, and budget before recommending genuine pathways.",
  },
  {
    question: "Can I apply for a study visa if I have gaps or previous visa refusals?",
    answer: "Yes. Many designated institutions accept justified academic or employment gaps backed by salary records, experience letters, and tax certificates. For prior visa refusals, we conduct an exhaustive case assessment, review refusal letters/GCMS notes, and address previous visa officer concerns transparently without making false approval promises.",
  },
  {
    question: "How do students pay foreign university tuition fees?",
    answer: "AKME Immigrations strictly adheres to statutory compliance: tuition fees and embassy charges are always wired directly from the student's or sponsor's bank account to the foreign university or government portal via authorized banking channels (Flywire/Convera/bank wire). AKME never collects or holds student tuition funds.",
  },
  {
    question: "Are IELTS and PTE coaching batches available with mock test labs?",
    answer: "Yes, our centre Opposite Punjabi University features modern computer labs with updated Pearson PTE scoring software, audio headsets, and comprehensive British Council/IDP standard IELTS material led by certified trainers.",
  },
];

const VERIFIED_REVIEWS = [
  {
    name: "Manpreet Kaur",
    location: "Patiala",
    service: "IELTS Coaching & Canada Study Visa",
    country: "Canada",
    date: "July 2026",
    rating: 5,
    text: "I prepared for IELTS at AKME's Patiala academy and scored 7.5 bands. Their visa filing team assisted me through every step of my Canadian college admission and PAL documentation with complete clarity.",
  },
  {
    name: "Sahil Verma",
    location: "Patiala",
    service: "Australia Subclass 500 Visa",
    country: "Australia",
    date: "April 2026",
    rating: 5,
    text: "Got my Australian student visa granted without hassle. From course shortlisting in Melbourne to Genuine Student (GS) documentation, AKME provided accurate and prompt support right here in Patiala.",
  },
  {
    name: "Taranpreet Kaur",
    location: "Patiala",
    service: "PTE Academic Prep & New Zealand Visa",
    country: "New Zealand",
    date: "March 2026",
    rating: 5,
    text: "The computer lab for PTE at AKME is excellent. The mock score reports were very accurate compared to the actual Pearson exam. I scored 67 overall and secured my admission effortlessly.",
  },
];

const HOW_AKME_WORKS_STEPS = [
  {
    step: "01",
    title: "Free Profile Assessment",
    desc: "Detailed evaluation of your academic qualifications, test scores, work history, and target destinations.",
  },
  {
    step: "02",
    title: "Counselling & Strategy",
    desc: "One-on-one session to establish clear timelines, realistic admissibility, and family budget considerations.",
  },
  {
    step: "03",
    title: "Course / Country Selection",
    desc: "Shortlisting designated learning institutions and career-aligned programs across Canada, UK, Australia, Europe & USA.",
  },
  {
    step: "04",
    title: "Documentation & SOP",
    desc: "Meticulous verification of academic transcripts, financial paperwork, Statements of Purpose, and affidavits.",
  },
  {
    step: "05",
    title: "Application & Filing",
    desc: "Timely lodgement of university applications and visa petitions strictly in accordance with embassy guidelines.",
  },
  {
    step: "06",
    title: "Pre-Departure / Next Steps",
    desc: "Mock visa interviews, accommodation guidance, foreign exchange advice, and post-arrival transition support.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION WITH PROMINENT POSITIONING & 4 PILLARS */}
      <HeroSection />

      {/* 2. TRUST / QUICK SERVICE STRIP WITH 4 CORE PILLARS */}
      <TrustStrip />

      {/* 3. FOUR PRIMARY SERVICE PILLARS: "What Can We Help You With?" */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Four Core Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
              What Can We Help You With?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              AKME brings overseas admissions, immigration advisory, test preparation, and foreign language fluency together in Patiala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRIMARY_SERVICE_PILLARS.map((pillar, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-brand-red group-hover:bg-brand-red group-hover:text-white flex items-center justify-center transition-colors shadow-2xs">
                      {index === 0 && <GraduationCap className="w-6 h-6" />}
                      {index === 1 && <FileCheck2 className="w-6 h-6" />}
                      {index === 2 && <BookOpen className="w-6 h-6" />}
                      {index === 3 && <Languages className="w-6 h-6" />}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-red transition-colors mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <Link
                  href={pillar.href}
                  className="inline-flex items-center justify-between text-xs font-bold text-brand-red group-hover:text-brand-redDark pt-4 border-t border-slate-100 transition-colors"
                >
                  <span>{pillar.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. WHY AKME — CREDIBILITY & LOCAL PATIALA TRUST */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
                The AKME Difference
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 leading-tight">
                Patiala's Trusted Partner for Truthful, Profile-Based Guidance
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Navigating foreign education and visa statutes requires precision, legal accountability, and complete transparency. At AKME, we reject over-promotional claims and focus on what genuinely matters: verified institutional credentials, authentic documentation, and strategic student counselling.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mb-1" />
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Experienced Counselling</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">Senior counsellors with deep understanding of global admissions & visa rules.</p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mb-1" />
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Profile-Based Strategy</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">Recommendations tailored strictly to your academics, gaps, and career aspirations.</p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mb-1" />
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Direct Institutional Fees</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">100% direct bank wire to foreign universities. AKME never collects tuition fees.</p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mb-1" />
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Refusal Case Assessment</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">Forensic review of previous visa refusals and constructive file restructuring.</p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:underline"
                >
                  <span>Learn more about AKME Patiala</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-slate-300">•</span>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-slate-700 hover:text-brand-red transition-colors"
                >
                  Visit Centre Opposite Punjabi University →
                </Link>
              </div>
            </div>

            {/* Right Card: New Centre Highlights */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-red">Patiala Institute</span>
                    <h3 className="text-xl font-bold text-slate-900 mt-0.5">Opposite Punjabi University</h3>
                  </div>
                  <span className="px-3 py-1 bg-red-100 text-brand-red text-xs font-bold rounded-full">
                    Modern Academy
                  </span>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Physical Presence in Patiala</strong>
                      <span className="text-slate-600">Opposite Punjabi University, Patiala, Punjab. Accessible campus for students across Malwa region.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">In-House IELTS & PTE Computer Lab</strong>
                      <span className="text-slate-600">Daily timed mock tests, AI speech assessment modules, and individual speaking cabins.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Languages className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">French & German Classroom Batches</strong>
                      <span className="text-slate-600">Certified instructors teaching A1, A2, B1, and B2 levels for European university admissions & PR points.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-red hover:bg-brand-redDark transition-colors text-center shadow-xs"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Get Directions to Centre</span>
                  </Link>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-brand-red" />
                    <span>Call Centre</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. STUDY ABROAD COUNTRIES (All 8 destinations) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
                Global Education Hubs
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
                Study Abroad Destinations
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Comprehensive university admissions and study visa guidance across Canada, Australia, UK, Germany, France, Ireland, USA, and Europe.
              </p>
            </div>
            <Link
              href="/study-abroad"
              className="inline-flex items-center gap-1 text-sm font-bold text-brand-red hover:text-brand-redDark group"
            >
              <span>Explore All 8 Destinations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STUDY_ABROAD_COUNTRIES.map((country) => (
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

      {/* 6. IMMIGRATION PATHWAYS SECTION */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
                Immigration Advisory
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
                Structured Immigration & Visa Services
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                From Permanent Residency point evaluations to visitor visa documentation and refusal case reviews.
              </p>
            </div>
            <Link
              href="/immigration"
              className="inline-flex items-center gap-1 text-sm font-bold text-brand-red hover:text-brand-redDark group"
            >
              <span>All Immigration Pathways</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMMIGRATION_SERVICES.map((serv) => (
              <div
                key={serv.slug}
                className="group bg-slate-50 rounded-3xl border border-slate-200 p-6 hover:bg-white hover:border-brand-red/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                      {serv.badge}
                    </span>
                    <FileCheck2 className="w-5 h-5 text-slate-400 group-hover:text-brand-red transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors mb-2">
                    {serv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {serv.shortDesc}
                  </p>
                </div>

                <Link
                  href={serv.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:underline pt-3 border-t border-slate-200/60"
                >
                  <span>Explore Pathway</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TEST PREPARATION (IELTS, PTE, CELPIP, CAEL, GRE, Duolingo) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
                In-House Academy & Labs
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
                Test Preparation in Patiala
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Prepare confidently with structured computer lab practice, real exam simulations, and certified trainers.
              </p>
            </div>
            <Link
              href="/test-preparation"
              className="inline-flex items-center gap-1 text-sm font-bold text-brand-red hover:text-brand-redDark group"
            >
              <span>Explore All Test Prep</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEST_PREPARATION_COURSES.map((course) => (
              <div
                key={course.slug}
                className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs hover:border-brand-red/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {course.badge}
                    </span>
                    <BookOpen className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {course.shortDesc}
                  </p>
                </div>

                <Link
                  href={course.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:underline pt-3 border-t border-slate-100"
                >
                  <span>Course Details & Batches</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOREIGN LANGUAGES (French, German, Spoken English) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
                Foreign Languages & Fluency
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
                French, German & Spoken English Training
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Level-based language training (A1 to B2) supporting university admissions, PR points, and conversational fluency.
              </p>
            </div>
            <Link
              href="/languages"
              className="inline-flex items-center gap-1 text-sm font-bold text-brand-red hover:text-brand-redDark group"
            >
              <span>View All Language Batches</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LANGUAGE_COURSES.map((lang) => (
              <div
                key={lang.slug}
                className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-7 hover:bg-white hover:border-brand-red/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                      {lang.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-700">{lang.levels}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {lang.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {lang.shortDesc}
                  </p>
                </div>

                <Link
                  href={lang.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:underline pt-3 border-t border-slate-200/60"
                >
                  <span>Batch Schedule & Fees</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. HOW AKME WORKS — 6-STEP TRANSPARENT PROCESS */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Clear Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
              How AKME Works
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              A transparent 6-step pathway from initial profile evaluation to university enrolment and departure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_AKME_WORKS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-brand-red font-heading">
                    {step.step}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-red-50 text-brand-red text-xs font-bold flex items-center justify-center">
                    ✓
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. GENUINE CANDIDATE EXPERIENCES */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
                Verified Candidate Feedback
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading">
                Genuine Success Stories
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Authentic testimonials from students and families who entrusted AKME Immigrations with their educational admissions and visa applications.
              </p>
            </div>
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-1 text-sm font-bold text-brand-red hover:underline"
            >
              <span>Read All Candidate Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VERIFIED_REVIEWS.map((review, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200">
                      {review.country}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-brand-red font-semibold">{review.service}</p>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-0.5">
                    <span>{review.location}</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PROMINENT NEW CENTRE LOCATION SECTION */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
                New Centre Location
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
                Visit AKME's New Centre — SCO 31, Opposite Punjabi University, Patiala
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We welcome students and parents to meet our senior counsellors in person. Walk in for course shortlisting, document checklist reviews, and computer lab demo sessions for IELTS and PTE.
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                  <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">New Centre Address</strong>
                    <span className="text-slate-600">SCO 31, Opposite Punjab &amp; Sind Bank, Walia Enclave, Opposite Punjabi University, Patiala, Punjab, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                  <Phone className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Direct Helpline</strong>
                    <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-brand-red font-bold hover:underline">
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                  <Clock className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Centre Timings</strong>
                    <span className="text-slate-600">{SITE_CONFIG.hours.days}: {SITE_CONFIG.hours.time}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={SITE_CONFIG.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-red hover:bg-brand-redDark shadow-md transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 shadow-xs transition-colors"
                >
                  <span>Contact Centre Details</span>
                </Link>
              </div>
            </div>

            {/* Google Maps Embed for Punjabi University Patiala */}
            <div className="lg:col-span-6 h-[340px] sm:h-[420px] rounded-3xl overflow-hidden border border-slate-200 shadow-md relative bg-white p-2">
              <iframe
                title="AKME Immigrations New Centre Opposite Punjabi University Patiala"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13778.536768340156!2d76.4385!3d30.3585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910287232e01df3%3A0xa64aa8a3424d5e9b!2sPunjabi%20University%2C%20Patiala%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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

      {/* 12. FREQUENTLY ASKED QUESTIONS */}
      <FAQAccordion items={HOMEPAGE_FAQS} />

      {/* 13. FINAL CONVERSION CTA */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Take The Next Step
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Ready to Plan Your Next Step?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Connect with Patiala's trusted immigration & education institute for an honest, profile-based evaluation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/profile-assessment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-brand-red hover:bg-brand-redDark shadow-lg transition-all"
            >
              <span>Get Free Profile Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors shadow-xs"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-600 text-white" />
              <span>WhatsApp AKME</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              <MapPin className="w-4 h-4 text-brand-red" />
              <span>Visit Our Centre</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
