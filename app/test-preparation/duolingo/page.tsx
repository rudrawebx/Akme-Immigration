import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Duolingo English Test (DET) Preparation in Patiala | AKME',
  description: 'Fast-track Duolingo English Test (DET) training in Patiala Opposite Punjabi University. Computer lab practice, adaptive test algorithms, and 1-on-1 interview clinics.',
};

const DUOLINGO_DATA: ServiceData = {
  slug: "test-preparation/duolingo",
  title: "Duolingo English Test (DET) Prep",
  badge: "Fast Results",
  tagline: "Computer-adaptive test preparation for the 1-hour online English proficiency exam accepted by 4,000+ universities worldwide.",
  overview: "The Duolingo English Test (DET) is an accessible, modern, computer-adaptive language proficiency assessment accepted by over 4,000 universities worldwide, including leading institutions in the USA, UK, Ireland, and Canada. With results delivered within 48 hours and affordable test fees, it is an efficient alternative to traditional exams. At AKME Patiala, we train candidates on camera-proctoring rules, adaptive question sequencing, and high-impact speaking & writing responses.",
  keyBenefits: [
    "Comprehensive coverage of unique DET question types: Read and Complete, Listen and Type, Interactive Reading, and Writing Sample.",
    "Practice in our Patiala computer lab with strict webcam proctoring simulation to avoid test invalidation.",
    "Daily subscore improvement drills for Literacy, Comprehension, Conversation, and Production.",
    "Integrated 1-on-1 speaking interview practice replicating the unscored but critical video interview section.",
    "Fast-track 2-week and 4-week preparation batches with flexible timing.",
  ],
  processSteps: [
    { title: "Diagnostic DET Practice Test", desc: "Assessing vocabulary speed, spelling accuracy, and listening transcription baseline." },
    { title: "Adaptive Mechanics & Subscore Training", desc: "Understanding how question difficulty scales based on answer accuracy." },
    { title: "Interactive Reading & Writing Drills", desc: "Mastering passage completion, selecting best titles, and writing extended 5-minute timed essays." },
    { title: "Speaking & Video Interview Preparation", desc: "Practicing spontaneous 1-to-3 minute speaking responses with clear pronunciation and coherent reasoning." },
    { title: "Proctored Mock Simulation", desc: "Undergoing full computerized practice ensuring adherence to testing guidelines (no eye-wandering, proper lighting, clean background)." },
  ],
  requirements: [
    "Candidates applying to universities in the USA, Canada, UK, Ireland, and Europe accepting DET scores.",
    "Valid passport for test identity verification.",
    "Basic computer typing familiarity (typing exercises provided at AKME lab).",
  ],
  documentsRequired: [
    "Government-issued Passport (mandatory for official DET registration)",
    "List of target foreign institutions to verify individual DET score requirements",
  ],
  relatedCountries: ["usa", "uk", "ireland", "canada"],
  faqs: [
    {
      question: "Which countries accept the Duolingo English Test for study visas?",
      answer: "DET is widely accepted for university admissions across the USA, UK, Ireland, and by select European institutions. For visa filing, requirements vary: the US and UK student visa processes generally honor DET if accepted by your sponsoring institution. Always verify specific country guidelines with an AKME counsellor.",
    },
    {
      question: "Why do some students get their DET test results canceled?",
      answer: "The Duolingo test employs strict AI proctoring: looking away from the screen, background noise, unauthorized devices, or face obscurities lead to automatic test invalidation. AKME trains students under exact testing protocols in our Patiala lab to ensure compliant test-taking.",
    },
  ],
};

export default function DuolingoPage() {
  return <ServicePageTemplate data={DUOLINGO_DATA} />;
}
