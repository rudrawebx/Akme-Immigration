import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Australia Immigration Guidance in Patiala | Subclass 189, 190, 491 - AKME',
  description: 'Expert guidance for Australian General Skilled Migration, SkillSelect, skills assessment (VETASSESS, ACS, EA), and state nominations in Patiala, Opposite Punjabi University.',
};

const AUSTRALIA_IMMIGRATION_DATA: ServiceData = {
  slug: "immigration/australia",
  title: "Australia Immigration Pathways",
  badge: "General Skilled Migration",
  tagline: "Points-tested migration pathways: Subclass 189 Skilled Independent, Subclass 190 Skilled Nominated, and Subclass 491 Regional visas.",
  overview: "Australia's General Skilled Migration (GSM) program welcomes qualified international professionals to meet regional and national skills shortages. At AKME Immigrations in Patiala, we assist candidates through mandatory skills assessments with relevant assessing authorities, calculate verifiable points under the 65-point benchmark, and lodge Expressions of Interest (EOI) across federal and state nomination systems.",
  keyBenefits: [
    "Precise points assessment covering age, qualifications, Australian/overseas employment, and partner skills.",
    "Comprehensive skills assessment assistance (ACS for IT, VETASSESS for professionals, Engineers Australia for engineers, and TRA for trades).",
    "State nomination eligibility matching across New South Wales, Victoria, Queensland, South Australia, and Western Australia.",
    "Subclass 491 Regional pathway planning offering 15 bonus points and clear routes to permanent residency (Subclass 191).",
    "Legal and document transparency from initial assessment to visa grant notification.",
  ],
  processSteps: [
    { title: "Points Audit & Occupation Check", desc: "Verifying that your occupation is listed on the Medium and Long-term Strategic Skills List (MLTSSL) or Short-term Skilled Occupation List (STSOL)." },
    { title: "Skills Assessment Lodgment", desc: "Submitting academic degrees, transcripts, and verified employment references to the designated Australian assessing body." },
    { title: "English Language Testing", desc: "Targeting Superior English (IELTS 8.0 each / PTE 79+ for 20 points) or Proficient English (IELTS 7.0 / PTE 65+ for 10 points)." },
    { title: "SkillSelect Expression of Interest (EOI)", desc: "Submitting formal digital profiles indicating state preferences and claimed point scores." },
    { title: "State Invitation & Visa Lodgment", desc: "Upon receipt of an invitation, submitting complete biometrics, health exams, and supporting documents to the Department of Home Affairs." },
  ],
  requirements: [
    "Age under 45 years at the time of invitation.",
    "Occupation listed on an active Australian Skilled Occupation List.",
    "Suitable Skills Assessment outcome from the relevant assessing authority.",
    "At least Competent English (IELTS 6.0 each module / PTE 50+).",
    "Minimum 65 points on the Australian points test grid.",
  ],
  documentsRequired: [
    "Valid Passport for all primary and dependent applicants",
    "Positive Skills Assessment Outcome Letter",
    "Official English Language Test Score Card (IELTS / PTE Academic)",
    "Employment reference letters, pay slips, bank statements, and tax documentation (ITR/Form 16)",
    "Educational certificates, degree transcripts, and syllabus descriptions where required",
  ],
  relatedCountries: ["australia"],
  faqs: [
    {
      question: "What is the difference between Subclass 189 and Subclass 190 visas?",
      answer: "Subclass 189 is an independent permanent residence visa that does not require state or family sponsorship, allowing you to live anywhere in Australia. Subclass 190 is a state-nominated permanent residence visa granting 5 additional points, subject to a commitment to live and work in the nominating state for the first 2 years.",
    },
    {
      question: "How does the Subclass 491 Regional Visa work?",
      answer: "Subclass 491 is a 5-year provisional visa providing 15 additional nomination points. Holders can live and work in designated regional areas of Australia and transition to permanent residency (Subclass 191) after 3 years of meeting taxable income thresholds.",
    },
    {
      question: "Does AKME provide coaching for the English language requirement?",
      answer: "Yes, our Patiala academy Opposite Punjabi University offers targeted IELTS and PTE Academic training with computer labs to help candidates secure Proficient (10 points) or Superior (20 points) language benchmarks.",
    },
  ],
};

export default function AustraliaImmigrationPage() {
  return <ServicePageTemplate data={AUSTRALIA_IMMIGRATION_DATA} />;
}
