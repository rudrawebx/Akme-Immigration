import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Immigration & Permanent Residency (PR) Guidance | AKME Immigrations',
  description: 'Professional immigration guidance for Canada Express Entry, PNPs, Australia General Skilled Migration (Subclass 189/190/491), and European settlement pathways.',
};

const IMMIGRATION_DATA: ServiceData = {
  slug: "immigration",
  title: "Immigration & Permanent Residency (PR)",
  badge: "Strategic Advisory",
  tagline: "Structured legal pathways for skilled professionals, provincial nomination programs, and permanent settlement abroad.",
  overview: "Navigating economic immigration programs like Canada Express Entry (FSW/CEC/PNP) or Australia's SkillSelect system requires meticulous points calculation, Credential Assessment (ECA/Skill Assessment), and flawless application lodgment. AKME Immigrations delivers strategic guidance to optimize your Comprehensive Ranking System (CRS) score.",
  keyBenefits: [
    "Precise CRS and points evaluation according to current immigration grids.",
    "Comprehensive guidance for Educational Credential Assessments (WES, ICAS, ACS, VETASSESS).",
    "Provincial Nominee Program (PNP) and State Nomination opportunity mapping.",
    "Professional review of employment reference letters and NOC/ANZSCO code matching.",
    "Post-ITA documentation audit and final PR electronic application submission.",
  ],
  processSteps: [
    { title: "Points Grid & Eligibility Assessment", desc: "Evaluating age, qualifications, continuous skilled experience, and language proficiency." },
    { title: "Educational Credential Assessment (ECA)", desc: "Guiding university transcript submission to official evaluation bodies like WES or relevant skill assessment authorities." },
    { title: "Language Testing Strategy", desc: "Targeting optimal IELTS General or CELPIP scores (CLB 9/10) to maximize CRS score potential." },
    { title: "Expression of Interest (EOI) Pool Lodgment", desc: "Creating and submitting accurate digital profiles into the Express Entry pool or SkillSelect system." },
    { title: "Invitation to Apply (ITA) & PR Filing", desc: "Assembling police clearances, medical certificates, and reference letters within the mandatory statutory deadline." },
  ],
  requirements: [
    "Recognized Bachelor's degree or higher validated via an approved ECA.",
    "Minimum 1 to 3 years of continuous full-time skilled work experience in an eligible NOC/TEER category.",
    "Language score meeting or exceeding CLB 7 (minimum) or CLB 9 (recommended for competitive CRS draws).",
    "Clean criminal record and verifiable medical clearance for all family applicants.",
  ],
  documentsRequired: [
    "Valid Passport for all primary and dependent applicants",
    "Educational Credential Assessment (ECA) Report",
    "IELTS General or CELPIP official test score sheet",
    "Detailed Employment Reference Letters with roles and duties",
    "Salary slips, Form 16, and bank statements verifying compensation",
    "Police Clearance Certificates (PCC) from all countries lived in",
    "Proof of Settlement Funds (bank letters and liquid asset certificates)",
  ],
  relatedCountries: ["canada", "australia", "germany", "new-zealand"],
  faqs: [
    {
      question: "What is a good CRS score for Canada Express Entry?",
      answer: "Target scores vary by draw type (General vs Category-based draws such as Healthcare, STEM, Trades, or French proficiency). Category-based draws often issue ITAs at lower CRS cut-offs compared to all-program draws.",
    },
    {
      question: "Can I include my spouse and dependent children in my PR application?",
      answer: "Yes, family members including your legally married spouse and dependent children under the age of 22 can be included as accompanying dependents on your PR application.",
    },
  ],
};

export default function ImmigrationPage() {
  return <ServicePageTemplate data={IMMIGRATION_DATA} />;
}
