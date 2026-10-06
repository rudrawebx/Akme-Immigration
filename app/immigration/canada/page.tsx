import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Canada Immigration Guidance in Patiala | Express Entry & CEC - AKME',
  description: 'Complete Canada immigration pathways: Express Entry (FSW/CEC/FST), Category-Based Selection, and family sponsorship at AKME Immigrations Patiala, Opposite Punjabi University.',
};

const CANADA_IMMIGRATION_DATA: ServiceData = {
  slug: "immigration/canada",
  title: "Canada Immigration Pathways",
  badge: "Express Entry & Settlement",
  tagline: "Profile evaluation and document preparation for Express Entry, Category-Based Selections, and Canadian PR programs.",
  overview: "Canada's economic immigration pathways provide well-defined routes for skilled professionals, international graduates, and specialized workers to obtain Canadian Permanent Residency. AKME Immigrations in Patiala guides candidates through the end-to-end process: Educational Credential Assessment (ECA), language testing optimization, profile creation in the Express Entry pool, and post-ITA documentation.",
  keyBenefits: [
    "Expert Comprehensive Ranking System (CRS) score calculation and point enhancement strategy.",
    "Targeted advice for Category-Based Selections (Healthcare, STEM, Trades, Transport, Agriculture & French).",
    "Educational Credential Assessment (WES, ICAS, CES, IQAS) verification and transcript management.",
    "Comprehensive guidance for candidates with previous Canadian study or work experience (CEC).",
    "Transparent document checklists with zero artificial claims or fake job promises.",
  ],
  processSteps: [
    { title: "Initial Eligibility Evaluation", desc: "Checking eligibility under the 67-point grid for Federal Skilled Workers (FSW) or Canadian Experience Class (CEC) criteria." },
    { title: "ECA & Language Assessment", desc: "Obtaining mandatory ECA credential reports and taking IELTS General, CELPIP, or TEF/TCF Canada exams." },
    { title: "Express Entry Profile Creation", desc: "Building your online Express Entry profile, selecting occupation TEER codes, and entering the federal candidate pool." },
    { title: "Provincial & Category Draw Tracking", desc: "Monitoring bi-weekly IRCC draw trends, category selections, and provincial Notification of Interest (NOI) cut-offs." },
    { title: "Application for Permanent Residence (e-APR)", desc: "Upon receiving an Invitation to Apply (ITA), compiling police clearances, medical exams, and submitting the digital dossier within 60 days." },
  ],
  requirements: [
    "Minimum 1 year of continuous full-time skilled work experience in an eligible TEER 0, 1, 2, or 3 occupation.",
    "Post-secondary educational credential evaluated through a designated Canadian ECA provider.",
    "Canadian Language Benchmark (CLB) test results valid within 2 years of application.",
    "Sufficient settlement funds according to family size (exempt for CEC or valid Canadian job offer holders).",
    "Clear medical examination results and Police Clearance Certificates from all countries lived in for 6+ months.",
  ],
  documentsRequired: [
    "Valid Passport for all primary applicants and family members",
    "ECA report from WES, ICAS, or other designated organizations",
    "Official language test score certificate (IELTS General / CELPIP / TEF)",
    "Detailed employment reference letters matching NOC/TEER job descriptions",
    "Bank statements and financial balance letters verifying settlement funds",
    "Police clearances and official medical exam certificates",
  ],
  relatedCountries: ["canada"],
  faqs: [
    {
      question: "What are Category-Based Express Entry draws?",
      answer: "In category-based draws, IRCC invites candidates from the Express Entry pool who have specific in-demand work experience (such as Healthcare, STEM occupations, Trades, Transport, or Agriculture) or proven French language proficiency, often at significantly lower CRS cut-offs than general draws.",
    },
    {
      question: "How long is an Express Entry profile valid in the pool?",
      answer: "An Express Entry profile remains active in the candidate pool for 12 months. If you do not receive an ITA within that period, you can create and submit a new profile without penalty.",
    },
    {
      question: "Does AKME sell Canadian job offers or LMIA documents?",
      answer: "Strictly NO. AKME operates with full ethical and legal compliance. We never sell, fabricate, or promise job offers or LMIAs. We guide genuine candidates through lawful economic pathways and points optimization.",
    },
  ],
};

export default function CanadaImmigrationPage() {
  return <ServicePageTemplate data={CANADA_IMMIGRATION_DATA} />;
}
