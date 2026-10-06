import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'CELPIP Coaching in Patiala | Canadian PR Language Prep - AKME',
  description: 'Expert CELPIP General coaching in Patiala, Opposite Punjabi University. Computer-delivered training, speaking clinics, and writing evaluations for Canada Express Entry.',
};

const CELPIP_DATA: ServiceData = {
  slug: "test-preparation/celpip",
  title: "CELPIP Test Preparation",
  badge: "Canada PR Focused",
  tagline: "Structured coaching for the Canadian English Language Proficiency Index Program (CELPIP-General) to maximize CRS score points.",
  overview: "The CELPIP General test is officially designated by IRCC for Canadian Permanent Residency (Express Entry) and citizenship applications. Because the entire test is completed on a computer in a single 3-hour sitting using a Canadian English accent context, preparation requires computer familiarity and specific response pacing. At AKME Patiala, our dedicated computer lab provides authentic test simulations and customized feedback on Speaking and Writing tasks.",
  keyBenefits: [
    "Full computer-based mock tests replicating the exact Prometric/Paragon CELPIP user interface.",
    "Targeted training on Canadian everyday communication situations (workplace emails, surveys, and advice).",
    "Headphone and microphone speaking clinics with automated timing drills.",
    "Comprehensive rubrics analysis covering Content/Coherence, Vocabulary, Readability, and Task Fulfillment.",
    "Flexible morning, afternoon, and evening batches in Patiala Opposite Punjabi University.",
  ],
  processSteps: [
    { title: "Diagnostic Benchmark Test", desc: "Taking an initial computerized mock exam to determine current CLB score equivalent across all 4 modules." },
    { title: "Task-Specific Framework Mastery", desc: "Mastering standard structures for Email Writing (Task 1) and Responding to Survey Questions (Task 2)." },
    { title: "Speaking Precision Training", desc: "Practicing the 8 distinct speaking tasks, including Describing a Scene, Predicting Consequences, and Expressing Opinions." },
    { title: "Timed Computer Lab Simulations", desc: "Weekly full-length timed tests under realistic exam pressure with detailed trainer review." },
    { title: "Final Readiness Review", desc: "Final diagnostic feedback and test-day pacing strategy before your official test date." },
  ],
  requirements: [
    "Open to all candidates planning Canadian PR (Express Entry / PNP) or Canadian Citizenship.",
    "Basic foundational English understanding (diagnostic test provided at enrolment).",
    "Commitment to daily lab mock tests and timed typing practice.",
  ],
  documentsRequired: [
    "Valid Passport copy (required for test registration identification)",
    "Previous IELTS/CELPIP score reports (if taking a re-test)",
  ],
  relatedCountries: ["canada"],
  faqs: [
    {
      question: "Is CELPIP easier than IELTS General?",
      answer: "Many candidates prefer CELPIP because it is 100% computer-based with built-in spell check for writing, completed in one sitting, and features realistic everyday Canadian communication scenarios rather than academic abstractions.",
    },
    {
      question: "What score is required for Canadian PR?",
      answer: "A score of CELPIP Level 9 in each of the four components (Listening, Reading, Writing, Speaking) awards the highly coveted Canadian Language Benchmark (CLB) 9, which significantly boosts CRS points under Express Entry.",
    },
    {
      question: "Are mock tests included in the course?",
      answer: "Yes, students enrolled at AKME Patiala receive access to our computer lab with multiple full-length simulated CELPIP practice exams and personalized trainer evaluations.",
    },
  ],
};

export default function CelpipPage() {
  return <ServicePageTemplate data={CELPIP_DATA} />;
}
