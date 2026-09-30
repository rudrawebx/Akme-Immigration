import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Study Visa Consultancy & University Admissions | AKME Immigrations',
  description: 'Expert study visa consulting in Patiala. University course selection, SOP drafting, financial guidance, and visa application for Canada, Australia, UK, USA, Germany, and Ireland.',
};

const STUDY_VISA_DATA: ServiceData = {
  slug: "study-visa",
  title: "Overseas Study Visa",
  badge: "Core Expertise",
  tagline: "Comprehensive university admissions, SOP preparation, and high-standard visa filing for premier international study destinations.",
  overview: "Securing an overseas student visa requires precise course matching, convincing Statement of Purpose (SOP) drafting, genuine financial audit, and seamless institutional coordination. AKME Immigrations provides transparent advisory from initial university shortlisting to pre-departure briefing.",
  keyBenefits: [
    "Personalized course and institution shortlisting matched to your budget and career goals.",
    "Comprehensive Statement of Purpose (SOP) drafting by experienced academic writers.",
    "Strict compliance checks to prevent visa refusals and fraudulent paper hazards.",
    "Direct institutional fee transfers — 0% hidden commissions on tuition payments.",
    "Pre-departure orientation, currency exchange advisory, and accommodation assistance.",
  ],
  processSteps: [
    { title: "Profile Evaluation & Assessment", desc: "Detailed analysis of your past academic scores, gaps, financial budget, and language test results." },
    { title: "Course & University Selection", desc: "Shortlisting government-recognized colleges and universities offering eligible post-study work permits." },
    { title: "Application & Offer Letter Lodgment", desc: "Submitting formal admission portfolios to secure Conditional and Unconditional Offer Letters." },
    { title: "Tuition Deposit & Confirmation (CoE / PAL / CAS)", desc: "Guiding legitimate international wire transfers to obtain official enrollment confirmations." },
    { title: "Visa Filing & Documentation", desc: "Organizing financial affidavits, bank letters, medicals, and biometrics on official embassy portals." },
  ],
  requirements: [
    "Completion of 12th standard (Senior Secondary) or recognized Bachelor's degree.",
    "Valid IELTS Academic, PTE Academic, or TOEFL iBT test report (or eligible waiver).",
    "Legitimate justification for any post-study academic or employment gaps.",
    "Demonstrable liquid funds for 1 year tuition fees and official government living costs.",
  ],
  documentsRequired: [
    "Valid Passport (min 18 months validity)",
    "All Academic Transcripts & Degree Certificates",
    "English Language Proficiency Test Score Card",
    "Statement of Purpose (SOP) / Letter of Explanation",
    "Proof of Financial Support & Bank Statements",
    "Income Tax Returns (ITRs) of Student or Sponsor",
    "Medical Examination Clearance & Police Clearance (PCC)",
  ],
  relatedCountries: ["canada", "australia", "uk", "usa", "germany", "ireland", "new-zealand"],
  faqs: [
    {
      question: "Can I apply for a study visa if I have a 3 to 5 year study gap?",
      answer: "Yes, genuine gaps supported by legitimate work experience, salary accounts, appointment letters, and tax filings are accepted by universities and immigration departments across Canada, Australia, the UK, and Europe.",
    },
    {
      question: "How much funds do I need to show for a study visa?",
      answer: "This varies by country: Canada requires 1st year tuition + CAD $20,635 GIC; Australia requires 1st year tuition + AUD $29,710 living cost; UK requires remaining tuition + £9,207 to £12,006 maintenance funds for 28 days.",
    },
    {
      question: "Do you guarantee visa approval?",
      answer: "No legitimate consultancy can guarantee a visa approval because all statutory decisions rest exclusively with visa officers. However, AKME ensures your file adheres strictly to official legal standards to maximize success chances.",
    },
  ],
};

export default function StudyVisaPage() {
  return <ServicePageTemplate data={STUDY_VISA_DATA} />;
}
