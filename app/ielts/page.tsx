import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Best IELTS Coaching in Patiala | Academic & General Training - AKME',
  description: 'Certified IELTS coaching in Urban Estate Phase II, Patiala. Master Reading, Writing, Listening, and Speaking modules with daily mock tests and expert trainers.',
};

const IELTS_DATA: ServiceData = {
  slug: "ielts",
  title: "IELTS Coaching (Academic & General)",
  badge: "In-House Training",
  tagline: "Structured coaching methodology, small batch sizes, daily speaking assessments, and weekly simulated mock tests in Patiala.",
  overview: "Achieving a high band score (7.0+ overall or CLB 9) is the critical gateway to overseas university admissions and Express Entry PR programs. AKME Immigrations' dedicated training academy in Patiala delivers rigorous classroom and digital coaching tailored to individual student weaknesses.",
  keyBenefits: [
    "Certified, experienced English language faculty with personalized feedback.",
    "Dedicated 1-on-1 daily Speaking evaluation cabin sessions.",
    "Specialized Writing workshops on Task 1 infographics and Task 2 opinion/argumentative essays.",
    "Comprehensive study material including Cambridge IELTS authentic practice tests.",
    "Weekly simulated exam environment replicating real test conditions and timing.",
  ],
  processSteps: [
    { title: "Diagnostic Diagnostic Level Check", desc: "Assessing baseline grammar, vocabulary, pronunciation, and listening comprehension." },
    { title: "Module Breakdown & Strategy Sessions", desc: "Targeting specific question types: True/False/Not Given, Headings, Maps, and Multiple Choice." },
    { title: "Intensive Daily Practice Sessions", desc: "Four daily hours divided into Listening, Reading, Writing, and individualized Speaking interviews." },
    { title: "Full-Length Weekly Mocks", desc: "Full 3-hour mock exams under exact examination rules with itemized band scoring." },
    { title: "Official Exam Booking & Registration Support", desc: "Assisting candidates with IDP / British Council test slot reservations in Punjab centres." },
  ],
  requirements: [
    "Open to students and professionals targeting study visas or permanent residency.",
    "Flexible morning, afternoon, and evening batches available to suit college students and working professionals.",
  ],
  documentsRequired: [
    "Passport copy or Aadhaar card for enrollment & exam registration",
    "Passport size photographs",
    "Previous IELTS TRF score card (if reappearing)",
  ],
  relatedCountries: ["canada", "australia", "uk", "usa", "new-zealand", "ireland"],
  faqs: [
    {
      question: "What is the difference between IELTS Academic and IELTS General?",
      answer: "IELTS Academic is intended for students applying for undergraduate or postgraduate university degrees abroad. IELTS General Training is used for immigration (such as Canada Express Entry and Australia PR) and work visa programs.",
    },
    {
      question: "How long does the IELTS preparation batch take?",
      answer: "Most students complete our intensive course in 4 to 8 weeks depending on their initial diagnostic score and target band requirement.",
    },
  ],
};

export default function IELTSPage() {
  return <ServicePageTemplate data={IELTS_DATA} />;
}
