import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'CAEL Preparation in Patiala | Canadian Academic English Language - AKME',
  description: 'Certified CAEL preparation in Patiala Opposite Punjabi University. Specialized training for Canadian university and college admissions.',
};

const CAEL_DATA: ServiceData = {
  slug: "test-preparation/cael",
  title: "CAEL Test Preparation",
  badge: "Academic English",
  tagline: "Master the Canadian Academic English Language assessment accepted by universities across Canada.",
  overview: "The CAEL (Canadian Academic English Language) test measures English in an integrated, academic context that mirrors actual Canadian post-secondary classroom scenarios. Instead of disconnected questions, CAEL candidates read articles, listen to short university lectures, and write and speak in response to those academic sources. AKME Patiala's training program equips students with integrated lecture note-taking, academic synthesis, and time management skills.",
  keyBenefits: [
    "Familiarity with integrated test formats where Reading, Listening, and Speaking/Writing overlap seamlessly.",
    "Academic lecture note-taking techniques taught by certified instructors in Patiala.",
    "Comprehensive computer lab practice with automated speech capture and playback analysis.",
    "Accepted by over 180 Canadian universities and colleges as proof of English language proficiency.",
    "Targeted feedback on academic vocabulary, formal tone, and coherence.",
  ],
  processSteps: [
    { title: "Diagnostic Academic Baseline Check", desc: "Evaluating listening comprehension of college lectures and academic reading speed." },
    { title: "Integrated Response Drills", desc: "Practicing the unique CAEL format: reading an academic text, listening to a related talk, and delivering a synthesis response." },
    { title: "Academic Essay & Paragraph Structuring", desc: "Refining logical arguments, source citations, and paragraph transitions." },
    { title: "Full-Length Computerized Simulations", desc: "Taking full 3.5-hour practice tests in our Patiala computer laboratory." },
    { title: "Test Day Readiness & Scoring Rubric Audit", desc: "Final review of CAEL scoring bands and test pacing strategies." },
  ],
  requirements: [
    "Prospective undergraduate or postgraduate students targeting Canadian designated learning institutions.",
    "Completed or pursuing Class 12th or Bachelor's degree from recognized boards/universities.",
  ],
  documentsRequired: [
    "Valid Passport for identification during official test registration",
    "Academic records for course level placement",
  ],
  relatedCountries: ["canada"],
  faqs: [
    {
      question: "Which institutions accept the CAEL test?",
      answer: "CAEL is accepted by all major Canadian English-speaking universities and colleges, including the University of Toronto, McGill University, UBC, University of Waterloo, and major Ontario colleges.",
    },
    {
      question: "How does CAEL differ from IELTS Academic?",
      answer: "While IELTS evaluates language in separate, isolated modules, CAEL integrates the skills around realistic university topics—for example, listening to a short lecture and writing an essay directly based on that lecture and an accompanying reading passage.",
    },
  ],
};

export default function CaelPage() {
  return <ServicePageTemplate data={CAEL_DATA} />;
}
