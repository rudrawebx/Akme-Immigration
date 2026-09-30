import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'PTE Academic Coaching in Patiala | AI Scoring Practice Lab - AKME',
  description: 'Top PTE Academic coaching in Patiala. Modern computer labs, Pearson-aligned AI scoring simulation, Repeat Sentence clinics, and fast-track score improvement.',
};

const PTE_DATA: ServiceData = {
  slug: "pte",
  title: "PTE Academic Coaching",
  badge: "AI Lab Facilities",
  tagline: "Computer-lab AI scoring practice, simulated sectional mocks, and targeted speaking clinics in Patiala.",
  overview: "Pearson Test of English (PTE Academic) is a 100% computer-delivered English test accepted globally by governments for visas and by thousands of universities. AKME's dedicated computer laboratory in Patiala trains students on the exact speech recognition algorithms and scoring parameters used by Pearson.",
  keyBenefits: [
    "High-spec computer lab equipped with noise-canceling headsets replicating Pearson test centres.",
    "AI software scoring with automated pronunciation, fluency, and oral fluency analysis.",
    "Targeted templates and time-tested strategies for Describe Image, Retell Lecture, and Write Essay.",
    "Sectional speed drills for Read Aloud, Repeat Sentence, and Summarize Written Text.",
    "Fast-track 2-week and 4-week crash courses available.",
  ],
  processSteps: [
    { title: "Diagnostic Computer Test", desc: "Taking a preliminary full-length computer exam to determine starting CEFR level." },
    { title: "Speaking & Pronunciation Lab Training", desc: "Mastering oral pitch, pause management, and fluency calibration." },
    { title: "Writing & Reading Strategy Sessions", desc: "Learning paragraph organization, collocations, and fill-in-the-blanks vocabulary." },
    { title: "Listening Sectional Drills", desc: "Practicing Write From Dictation and Highlight Incorrect Words with diverse accents." },
    { title: "Scored Mock Exam Series", desc: "Reviewing comprehensive AI score cards with senior certified trainers before exam day." },
  ],
  requirements: [
    "Open to all candidates planning to study or migrate to Australia, New Zealand, the UK, Canada, or the USA.",
  ],
  documentsRequired: [
    "Valid Passport for Pearson registration",
    "Passport size photograph",
  ],
  relatedCountries: ["australia", "new-zealand", "uk", "canada", "usa"],
  faqs: [
    {
      question: "Is PTE accepted for Canada and Australia visas?",
      answer: "Yes, PTE Academic is widely accepted for Australian study visas and General Skilled Migration, as well as Canadian study permits (under SDS rules) and Express Entry (PTE Core).",
    },
    {
      question: "How fast do PTE exam results come out?",
      answer: "Pearson typically issues official PTE Academic results within 24 to 48 hours after test completion.",
    },
  ],
};

export default function PTEPage() {
  return <ServicePageTemplate data={PTE_DATA} />;
}
