import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Permanent Residency (PR) Guidance in Patiala | Canada & Australia - AKME',
  description: 'Profile-based evaluation for Canada Express Entry, Federal Skilled Worker (FSW), Canadian Experience Class (CEC), and Australia Subclass 189/190/491 visas at AKME Patiala, Opposite Punjabi University.',
};

const PR_DATA: ServiceData = {
  slug: "immigration/pr",
  title: "Permanent Residency (PR) Pathways",
  badge: "Economic Immigration",
  tagline: "Comprehensive points evaluation, credential assessments, and strategic profile guidance for Canada Express Entry and Australia PR.",
  overview: "Permanent residency pathways grant eligible skilled workers and their families the right to live, work, and study indefinitely in destination nations like Canada or Australia. At AKME Immigrations in Patiala, we conduct transparent points calculations, evaluate NOC/TEER code eligibility, and map realistic routes through Express Entry and General Skilled Migration without making false guarantees.",
  keyBenefits: [
    "Comprehensive points audit across age, education, skilled work history, and language scores.",
    "Credential evaluation assistance through WES, ICAS, ACS, VETASSESS, and EA.",
    "Category-based selection strategy (STEM, Healthcare, Trades, Transport, and French proficiency).",
    "Employment reference letter vetting to ensure alignment with statutory occupational standards.",
    "Post-ITA document compilation including Police Clearances (PCC) and medical coordination.",
  ],
  processSteps: [
    { title: "Points Grid & Eligibility Assessment", desc: "Detailed audit of your credentials against current Express Entry Comprehensive Ranking System (CRS) or Australia 65-point threshold." },
    { title: "Educational Credential Assessment (ECA)", desc: "Guiding university transcript procurement and submission to authorized evaluating bodies." },
    { title: "Language Proficiency Benchmark", desc: "Strategizing for CLB 9/10 in IELTS General or CELPIP, or French language proficiency bonus points." },
    { title: "Expression of Interest (EOI) Pool Filing", desc: "Accurate submission of digital profiles into official federal immigration pools." },
    { title: "Invitation to Apply (ITA) & File Lodgment", desc: "Assembling genuine employment proofs, bank verification, and submitting the electronic PR file within deadlines." },
  ],
  requirements: [
    "Post-secondary educational credential evaluated through an approved assessment body.",
    "Minimum 1 to 3 years of verified continuous skilled work experience in an eligible occupation.",
    "Official language score sheet (IELTS General, CELPIP, or PTE Core) meeting program thresholds.",
    "Proof of unencumbered settlement funds (where applicable) and clean background checks.",
  ],
  documentsRequired: [
    "Valid Passport for all primary applicants and accompanying dependents",
    "Educational Credential Assessment (ECA) / Skills Assessment Report",
    "Official Language Test Score Card (CLB / English proficiency)",
    "Detailed Employer Experience Letters outlining primary duties and compensation",
    "Salary slips, Form 16/tax filings, and bank statements validating compensation",
    "Proof of Settlement Funds (bank balance certificates and 6-month statements)",
  ],
  relatedCountries: ["canada", "australia"],
  faqs: [
    {
      question: "What is the difference between Federal Skilled Worker and Canadian Experience Class?",
      answer: "The Federal Skilled Worker (FSW) program is designed for skilled candidates with foreign work experience who meet the 67-point grid. The Canadian Experience Class (CEC) is tailored for individuals with at least 1 year of Canadian skilled work experience inside Canada.",
    },
    {
      question: "Does AKME guarantee receiving an Invitation to Apply (ITA)?",
      answer: "No. ITAs are issued solely by immigration authorities (such as IRCC or Australian Home Affairs) based on published draw cut-offs and statutory quotas. AKME provides transparent, profile-based strategy to maximize your legitimate points score.",
    },
    {
      question: "Can I increase my CRS score with foreign languages?",
      answer: "Yes, candidates who demonstrate French language proficiency (NCLC 7+) can earn up to 50 additional bonus points under Express Entry, alongside eligibility for dedicated French category-based draws.",
    },
  ],
};

export default function PRPage() {
  return <ServicePageTemplate data={PR_DATA} />;
}
