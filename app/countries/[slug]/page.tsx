import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  DollarSign, 
  Briefcase, 
  FileText, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { COUNTRIES_LIST, SITE_CONFIG } from '@/lib/config';
import AssessmentForm from '@/components/AssessmentForm';
import FAQAccordion from '@/components/FAQAccordion';
import TrustStrip from '@/components/TrustStrip';

// Detailed country intelligence
const COUNTRY_DETAILS: Record<string, {
  name: string;
  heroImage: string;
  overview: string;
  whyChoose: string[];
  intakes: string[];
  costLiving: string;
  costTuition: string;
  financialProof: string;
  ieltsRequirement: string;
  pteRequirement: string;
  academicRequirement: string;
  popularCourses: string[];
  postStudyWork: string;
  faqs: Array<{ question: string; answer: string }>;
  lastUpdated: string;
}> = {
  canada: {
    name: "Canada",
    heroImage: "/images/canada-skyline.jpg",
    overview: "Canada remains one of the world's most desired destinations for international students due to its globally recognized degrees, safe multicultural society, and well-defined Post-Graduation Work Permit (PGWP) framework.",
    whyChoose: [
      "Globally recognized universities and polytechnic colleges.",
      "Post-Graduation Work Permit (PGWP) of up to 3 years for eligible programs.",
      "Pathway toward Canadian Permanent Residency (Express Entry & Provincial Nominee Programs).",
      "Opportunity to work up to 24 hours per week off-campus during academic terms.",
    ],
    intakes: ["Fall (September) - Major", "Winter (January) - Secondary", "Spring/Summer (May) - Select"],
    costTuition: "CAD $16,000 - $32,000 per year (depending on institution and program)",
    costLiving: "CAD $20,635 per year (Mandatory Guaranteed Investment Certificate - GIC)",
    financialProof: "1st year full tuition receipt + CAD $20,635 GIC deposit with an approved Canadian bank",
    ieltsRequirement: "Undergraduate: 6.0 overall (min 6.0 each module) | Postgraduate: 6.5 overall (min 6.0 each)",
    pteRequirement: "PTE Academic 60+ overall with no communicative skill below 58",
    academicRequirement: "Minimum 55% - 65% in prior academic degree/senior secondary from recognized board",
    popularCourses: ["Computer Science & Software Development", "Business Administration & Project Management", "Health Informatics & Nursing", "Supply Chain & Logistics"],
    postStudyWork: "Programs of 8 months to 2 years qualify for equivalent work permit duration; programs of 2+ years or Master's degrees qualify for a full 3-year PGWP.",
    lastUpdated: "September 2026",
    faqs: [
      {
        question: "Do I need a Provincial Attestation Letter (PAL) for Canada?",
        answer: "Yes, under current IRCC regulations, most undergraduate and college diploma applicants must obtain a Provincial Attestation Letter (PAL) issued by the province before submitting a study permit application. Master's and doctoral degree applicants are exempt.",
      },
      {
        question: "Can my spouse join me while I study in Canada?",
        answer: "Under recent IRCC rules, Spousal Open Work Permits (SOWP) are primarily eligible for spouses of students enrolled in master's and doctoral degree programs, as well as select professional degree programs.",
      },
      {
        question: "What is the processing time for Canadian study permits from India?",
        answer: "Current average processing timelines range from 4 to 8 weeks following biometric submission, subject to IRCC seasonal backlogs.",
      },
    ],
  },

  australia: {
    name: "Australia",
    heroImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1600&q=80",
    overview: "Australia offers high-ranking Group of Eight research institutions, vibrant cosmopolitan lifestyle, strong student consumer protections under ESOS legislation, and practical post-study career opportunities.",
    whyChoose: [
      "Top-ranked global universities with strong industry research partnerships.",
      "Subclass 485 Temporary Graduate Visa offering 2 to 4 years post-study work rights.",
      "Fortnightly work rights of 48 hours during study sessions and unlimited during breaks.",
      "High standard of living in student-centric cities like Melbourne, Sydney, and Adelaide.",
    ],
    intakes: ["Semester 1 (February / March)", "Semester 2 (July)", "Trimester 3 (November - Limited)"],
    costTuition: "AUD $24,000 - $45,000 per year",
    costLiving: "AUD $29,710 per year (Department of Home Affairs standard living requirement)",
    financialProof: "Proof of 1 year tuition fees + AUD $29,710 living expenses + travel costs via verified bank funds/loans",
    ieltsRequirement: "Undergraduate: 6.0 overall (no band < 5.5) | Masters: 6.5 overall (no band < 6.0)",
    pteRequirement: "PTE Academic 58 - 65 overall",
    academicRequirement: "Minimum 60% in Class 12th or Bachelor's degree from recognized university",
    popularCourses: ["Information Technology & Cybersecurity", "Professional Accounting & Finance", "Engineering & Mining", "Hospitality & Nursing"],
    postStudyWork: "2 years for Bachelor graduates, 2-3 years for Master's graduates, plus additional regional extensions where applicable.",
    lastUpdated: "September 2026",
    faqs: [
      {
        question: "What is the Genuine Student (GS) requirement for Australia?",
        answer: "The Genuine Student (GS) assessment replaced the GTE requirement. It requires applicants to articulate their academic trajectory, reasons for choosing Australia, how the qualification enhances career prospects in their home country, and evidence of economic ties.",
      },
      {
        question: "Can I pay Australia university tuition in installments?",
        answer: "Yes, Australian universities typically issue a Confirmation of Enrolment (CoE) upon receipt of an initial semester deposit rather than requiring the entire annual tuition upfront.",
      },
    ],
  },

  uk: {
    name: "United Kingdom",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80",
    overview: "Home to Oxford, Cambridge, and prestigious Russell Group universities, the UK provides intensive, internationally acclaimed 1-year Master's programs that enable students to enter the global workforce faster.",
    whyChoose: [
      "Intensive 1-year Master's degree programs that save tuition and living costs.",
      "Graduate Route visa offering 2 full years of unsponsored work rights post-graduation.",
      "High concentration of top-100 world universities with centuries of academic excellence.",
      "No embassy interview required for many eligible applicants with credible documentation.",
    ],
    intakes: ["Autumn Intake (September / October) - Major", "Spring Intake (January / February) - Secondary"],
    costTuition: "£13,000 - £26,000 per year",
    costLiving: "£9,207 for outside London / £12,006 for inside London (9 months living funds requirement)",
    financialProof: "Tuition balance + official 28-day maintenance funds held in accepted bank account",
    ieltsRequirement: "Undergraduate: 6.0 overall | Masters: 6.5 overall (Certain UK universities offer IELTS waivers based on 12th English score)",
    pteRequirement: "PTE Academic 58 - 65 overall",
    academicRequirement: "Class 12th with 60%+ or Bachelor's degree with 55%+ from a recognized institution",
    popularCourses: ["Data Science & Artificial Intelligence", "MSc International Business & Management", "Biotechnology & Healthcare", "Law & Commercial Practice"],
    postStudyWork: "Graduate Route gives 2 years of open work rights for Bachelor's and Master's graduates (3 years for PhDs).",
    lastUpdated: "September 2026",
    faqs: [
      {
        question: "Can I get an IELTS waiver for UK universities?",
        answer: "Yes, many UK universities grant English language waivers if you scored 70% or higher in 12th standard English with CBSE, ICSE, or Punjab/state boards.",
      },
      {
        question: "How long must maintenance funds be maintained for the UK visa?",
        answer: "UK Visas and Immigration (UKVI) strictly mandates that the required tuition balance plus living expenses must be held in your bank account for a continuous period of at least 28 days before CAS and visa submission.",
      },
    ],
  },

  usa: {
    name: "United States",
    heroImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1600&q=80",
    overview: "The United States is the epicenter of global technology, venture innovation, and academic research, offering flexible academic curricula, campus assistantships, and extensive STEM OPT opportunities.",
    whyChoose: [
      "World-leading research facilities and thousands of accredited institutions.",
      "Up to 36 months (3 years) of post-study employment authorization through STEM OPT.",
      "Opportunities for Graduate Assistantships (RA/TA) that subsidize tuition expenses.",
      "Flexible curriculum allowing students to double major or tailor concentrations.",
    ],
    intakes: ["Fall (August / September) - Primary", "Spring (January) - Secondary"],
    costTuition: "$20,000 - $48,000 per year",
    costLiving: "$12,000 - $18,000 per year",
    financialProof: "Form I-20 financial declaration demonstrating liquid funds for at least 1 academic year",
    ieltsRequirement: "IELTS 6.5 - 7.0 or TOEFL iBT 80 - 100",
    pteRequirement: "PTE Academic 58 - 68",
    academicRequirement: "Strong secondary or undergraduate academic GPA (typically 3.0+ on US scale or 60%+)",
    popularCourses: ["MS Computer Science & Data Systems", "MBA & Technology Management", "Biomedical Engineering", "Finance & Fintech"],
    postStudyWork: "12 months of standard Optional Practical Training (OPT) plus 24 months STEM extension for qualifying majors (total 36 months).",
    lastUpdated: "September 2026",
    faqs: [
      {
        question: "Is the F-1 visa interview difficult?",
        answer: "The US F-1 visa requires an in-person consular interview at the embassy/consulate. AKME provides intensive mock interview preparation focusing on your academic intent, course selection, and financial capability.",
      },
      {
        question: "Are GRE/GMAT mandatory for US university admissions?",
        answer: "Many top US universities now offer GRE waivers for STEM and business programs. Our counsellors identify institutions matching your profile with or without test scores.",
      },
    ],
  },

  germany: {
    name: "Germany",
    heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80",
    overview: "Germany is Europe’s economic powerhouse, renowned for its tuition-free or nominal-tuition public university education, world-class engineering, and attractive 18-month post-study job seeker visa.",
    whyChoose: [
      "Zero or minimal tuition fees at public universities for international students.",
      "Engineering, automotive, and technological powerhouse of the European Union.",
      "18-month Post-Study Job Seeker Residence Permit following graduation.",
      "Direct pathway to EU Blue Card and German Permanent Residence (Niederlassungserlaubnis).",
    ],
    intakes: ["Winter Semester (September / October) - Major", "Summer Semester (March / April) - Secondary"],
    costTuition: "€0 - €3,000 per semester (Most public universities only charge a semester fee of €250-€350)",
    costLiving: "€11,208 per year (Mandatory Blocked Account / Sperrkonto)",
    financialProof: "Official Blocked Account deposit of €11,208 (via Coracle, Fintiba, or Expatrio)",
    ieltsRequirement: "IELTS 6.5 overall for English-taught master's courses",
    pteRequirement: "PTE Academic 58+",
    academicRequirement: "Minimum 65% - 70% in Bachelor's degree (German equivalent 2.5 or better) with APS Certificate",
    popularCourses: ["Automotive & Mechanical Engineering", "Computer Science & Machine Learning", "Renewable Energy Systems", "International Logistics"],
    postStudyWork: "18-month Job Seeker Visa with easy conversion to EU Blue Card upon securing a qualifying employment contract.",
    lastUpdated: "September 2026",
    faqs: [
      {
        question: "What is the APS Certificate for Germany?",
        answer: "The APS (Akademische Prüfstelle) certificate issued by the German Embassy in New Delhi is a mandatory verification of Indian academic certificates required prior to university admission and student visa filing.",
      },
      {
        question: "Do I need to learn German to study in Germany?",
        answer: "Many master's degrees are taught entirely in English and do not require German proficiency for admission. However, learning A1/A2 German (which AKME teaches in Patiala) greatly enhances part-time job and post-study employment prospects.",
      },
    ],
  },

  ireland: {
    name: "Ireland",
    heroImage: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=1600&q=80",
    overview: "Ireland is the technology and financial services capital of the European Union, hosting European headquarters for Apple, Google, Microsoft, Meta, and Pfizer with a generous 2-year stay-back visa.",
    whyChoose: [
      "English-speaking EU member nation with thriving tech and pharmaceutical sectors.",
      "2-Year Third Level Graduate Scheme (stay-back visa) for Master's graduates.",
      "Globally acclaimed universities including Trinity College Dublin and University College Dublin.",
      "High employability and starting salaries for skilled STEM and business graduates.",
    ],
    intakes: ["Autumn Intake (September) - Major", "Spring Intake (January/February) - Select"],
    costTuition: "€11,000 - €25,000 per year",
    costLiving: "€10,000 per year proof of living funds",
    financialProof: "Tuition fee payment + €10,000 in immediate liquid funds + proof of sponsor financial capability",
    ieltsRequirement: "IELTS 6.5 overall (min 6.0 each module)",
    pteRequirement: "PTE Academic 63+",
    academicRequirement: "Minimum 60% in Bachelor's degree from recognized Indian university",
    popularCourses: ["Data Analytics & Artificial Intelligence", "Cloud Computing & Cybersecurity", "Pharmaceutical & MedTech Sciences", "Fintech & Quantitative Finance"],
    postStudyWork: "24 months (2 years) stay-back work permit for Master's degree graduates under the Third Level Graduate Scheme.",
    lastUpdated: "September 2026",
    faqs: [
      {
        question: "Can international students work part-time in Ireland?",
        answer: "Yes, students on a Stamp 2 visa are permitted to work up to 20 hours per week during term time and up to 40 hours per week during designated holiday periods.",
      },
    ],
  },

  'new-zealand': {
    name: "New Zealand",
    heroImage: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1600&q=80",
    overview: "New Zealand combines high academic standards across all 8 state-funded universities with a safe, welcoming environment, practical teaching methodologies, and clear post-study employment rights.",
    whyChoose: [
      "All 8 New Zealand state universities rank in the QS World Top 500.",
      "Up to 3-year Post-Study Work Visa (PSWV) for qualifying degree programs.",
      "Consistently ranked among the world's safest and most peaceful societies.",
      "Part-time work rights of 20 hours per week during term and full-time during vacations.",
    ],
    intakes: ["Semester 1 (February) - Major", "Semester 2 (July) - Secondary"],
    costTuition: "NZD $24,000 - $36,000 per year",
    costLiving: "NZD $20,000 per year (Immigration New Zealand standard)",
    financialProof: "1st year tuition + NZD $20,000 living funds held in genuine banking records (Funds Transfer Scheme - FTS option available)",
    ieltsRequirement: "Undergraduate: 6.0 overall | Masters: 6.5 overall (min 6.0 each band)",
    pteRequirement: "PTE Academic 58 - 65",
    academicRequirement: "Class 12th with 65%+ or Bachelor's degree with 60%+",
    popularCourses: ["Information Systems & Software Design", "Civil & Environmental Engineering", "Agribusiness & Food Science", "Hospitality & International Tourism"],
    postStudyWork: "Up to 3 years open Post-Study Work Visa depending on the level of qualification completed.",
    lastUpdated: "September 2026",
    faqs: [
      {
        question: "What is the Funds Transfer Scheme (FTS) for New Zealand?",
        answer: "The Funds Transfer Scheme (FTS) allows Indian students to transfer their living funds into an ANZ New Zealand bank account. A set amount is released monthly to cover living expenses, significantly simplifying proof of funds for visa processing.",
      },
    ],
  },

  france: {
    name: "France",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
    overview: "France is a leading global education hub celebrated for prestigious Grandes Écoles, subsidized higher education, world-renowned fashion, business & engineering institutes, and a generous 5-year post-study Schengen alumni visa.",
    whyChoose: [
      "Subsidized tuition fees and housing allowance (CAF) for international students.",
      "5-Year Short-Stay Schengen Alumni Visa for Indian master's graduates.",
      "World-leading specialized schools in Luxury Brand Management, Culinary Arts, and Engineering.",
      "English-taught degree programs with French language support available at AKME in Patiala.",
    ],
    intakes: ["Autumn Intake (September/October) - Major", "Spring Intake (January/February) - Select"],
    costTuition: "€3,000 - €16,000 per year (depending on public vs private Grande École)",
    costLiving: "€8,000 - €11,000 per year",
    financialProof: "Proof of tuition fee coverage + €615/month living funds for one academic year",
    ieltsRequirement: "IELTS 6.0 - 6.5 overall (waivers available for qualifying English-medium degree holders)",
    pteRequirement: "PTE Academic 58 - 63+",
    academicRequirement: "Minimum 55% - 60% in high school or Bachelor's degree from recognized university",
    popularCourses: ["Luxury Brand & Fashion Management", "International Business & MBA", "Data Analytics & AI", "Culinary Arts & Hospitality Management"],
    postStudyWork: "Up to 2 Years APS (Autorisation Provisoire de Séjour) / RECE permit for job search, plus 5-year alumni visa for master's degree holders.",
    lastUpdated: "September 2026",
    faqs: [
      {
        question: "Can I study in France in English without knowing French?",
        answer: "Yes, hundreds of bachelor's and master's degree programs across France are taught entirely in English. However, learning A1/A2 French at AKME Patiala helps significantly with daily life, internships, and networking in France.",
      },
      {
        question: "What is the 5-year Schengen visa benefit for Indian alumni?",
        answer: "Indian students who graduate with a master's degree or higher from an accredited French institution are eligible for a 5-year short-stay Schengen visa to return to France and travel across the Schengen zone.",
      },
    ],
  },

  europe: {
    name: "Europe (Schengen)",
    heroImage: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=1600&q=80",
    overview: "Europe offers affordable, high-quality English-taught degrees across countries like the Netherlands, Sweden, Poland, Hungary, and Italy with seamless Schengen travel mobility and clear post-study stay-back frameworks.",
    whyChoose: [
      "Borderless Schengen mobility across 29 European countries on a single student visa.",
      "High standard of academic research and affordable living costs compared to North America.",
      "Post-study job search visas varying from 9 to 18 months across different EU nations.",
      "Diverse multicultural environment with English-taught Bachelor's and Master's degrees.",
    ],
    intakes: ["Autumn (September/October)", "Spring (February/March)"],
    costTuition: "€2,500 - €14,000 per year (varies by country and program)",
    costLiving: "€7,500 - €12,000 per year",
    financialProof: "Proof of 1-year living funds deposited in bank account or national blocked account",
    ieltsRequirement: "IELTS 6.0 - 6.5 overall (or equivalent PTE)",
    pteRequirement: "PTE Academic 56 - 64",
    academicRequirement: "Senior secondary or Bachelor's degree with 55%+ marks",
    popularCourses: ["Computer Science & Software Engineering", "International Business Management", "Environmental & Renewable Sciences", "Public Policy & Economics"],
    postStudyWork: "12 to 18 months orientation / job search permits depending on the specific European destination country.",
    lastUpdated: "September 2026",
    faqs: [
      {
        question: "Can I travel to other European countries on my student visa?",
        answer: "Yes, holding a National Student Visa (Type D) or residence permit from any Schengen member state allows visa-free travel across the entire Schengen Zone for up to 90 days in any 180-day period.",
      },
      {
        question: "Do European universities offer English-medium degrees?",
        answer: "Yes, thousands of bachelor's and master's programs in the Netherlands, Poland, Germany, Sweden, and Italy are delivered completely in English.",
      },
    ],
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const country = COUNTRY_DETAILS[params.slug];
  if (!country) {
    return { title: 'Country Not Found' };
  }
  return {
    title: `Study in ${country.name} - Visas, Costs & Requirements | AKME Immigrations`,
    description: `Complete guide to studying in ${country.name}: University admissions, post-study work permits, IELTS/PTE requirements, and tuition costs. Certified guidance in Patiala.`,
  };
}

export default function CountryDetailPage({ params }: { params: { slug: string } }) {
  const country = COUNTRY_DETAILS[params.slug];
  if (!country) {
    notFound();
  }

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 py-12 sm:py-16 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-red-50 text-brand-red text-xs font-bold uppercase rounded-full tracking-wider border border-red-200">
                  Destination Guide
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-brand-gold" />
                  Last Updated: {country.lastUpdated}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading">
                Study & Settle in {country.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {country.overview}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="#assessment"
                  className="px-6 py-3.5 bg-brand-red hover:bg-brand-redDark text-white font-bold rounded-xl shadow-md transition-colors inline-flex items-center gap-2 text-sm"
                >
                  <span>Check Eligibility for {country.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20AKME,%20I%20am%20interested%20in%20studying%20in%20${country.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-colors inline-flex items-center gap-2 text-sm shadow-sm"
                >
                  <span>WhatsApp Advisor</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src={country.heroImage}
                  alt={`Study in ${country.name}`}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm inline-block w-fit">
                  {country.name} Study Destination
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Regulatory Notice Banner */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-amber-900">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Official Policy Compliance Notice</p>
                <p className="text-amber-800 text-xs mt-0.5">
                  Immigration rules, student quotas, and visa regulations are subject to statutory amendments by the respective immigration ministries. Information here is for orientation; our counsellors verify live regulations prior to submission. No agency can legally guarantee visa outcomes.
                </p>
              </div>
            </div>

            {/* Why Choose Destination */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 font-heading">
                Why Study in {country.name}?
              </h2>
              <div className="grid grid-cols-1 gap-3 pt-2">
                {country.whyChoose.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Academic & Financial Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 font-heading">
                Requirements & Financial Estimates
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Estimated Tuition</span>
                  <span className="text-sm font-semibold text-slate-900">{country.costTuition}</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Living Cost Funds</span>
                  <span className="text-sm font-semibold text-slate-900">{country.costLiving}</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-1">IELTS Requirement</span>
                  <span className="text-sm font-semibold text-slate-900">{country.ieltsRequirement}</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-1">PTE Academic</span>
                  <span className="text-sm font-semibold text-slate-900">{country.pteRequirement}</span>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs uppercase font-bold text-slate-400 block">Mandatory Proof of Funds</span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {country.financialProof}
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs uppercase font-bold text-slate-400 block">Post-Study Work Permit (PSWP)</span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {country.postStudyWork}
                </p>
              </div>
            </div>

            {/* Popular Programs */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                Popular In-Demand Courses in {country.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {country.popularCourses.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs sm:text-sm font-medium text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-brand-red"></span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 font-heading mb-4">
                Frequently Asked Questions: {country.name}
              </h2>
              <div className="space-y-4">
                {country.faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-100 pb-4 last:border-b-0">
                    <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Assessment Lead Form */}
          <div className="lg:col-span-5" id="assessment">
            <div className="sticky top-24">
              <AssessmentForm
                defaultCountry={country.name}
                defaultService="Study Visa"
                title={`Check ${country.name} Eligibility`}
                subtitle={`Get a detailed profile evaluation for colleges and universities in ${country.name}.`}
              />
            </div>
          </div>

        </div>
      </div>

      <TrustStrip />
    </div>
  );
}
