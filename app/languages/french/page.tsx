import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'French Language Classes in Patiala | A1, A2, B1, B2 - AKME',
  description: 'Certified French language classes in Patiala Opposite Punjabi University. Prepare for DELF, TEF Canada, and TCF. Boost Canada PR points and qualify for study in France.',
};

const FRENCH_DATA: ServiceData = {
  slug: "languages/french",
  title: "French Language Training (A1 - B2)",
  badge: "DELF & TEF Canada",
  tagline: "Structured CEFR level-based French coaching in Patiala for Canada PR bonus points, French university admissions, and international fluency.",
  overview: "French is one of the world's most influential official languages and a powerful asset for international education and immigration. Demonstrating French proficiency (NCLC 7+) grants up to 50 additional Comprehensive Ranking System (CRS) points under Canada Express Entry, as well as priority consideration in targeted French Category draws. At AKME Patiala Opposite Punjabi University, our certified faculty guides students step-by-step from beginner A1 to fluent B2 levels with interactive speaking exercises, grammar mastery, and official DELF/TEF exam simulations.",
  keyBenefits: [
    "Complete CEFR progression: A1 (Discovery), A2 (Waystage), B1 (Threshold), and B2 (Vantage).",
    "Specialized TEF Canada and TCF Canada test-preparation batches designed for Express Entry PR points.",
    "Small batch sizes ensuring individualized pronunciation correction and daily conversational dialogues.",
    "Comprehensive study modules covering listening comprehension, grammar structures, reading, and formal writing.",
    "Pathway support for French public universities and top Grandes Écoles with subsidized tuition.",
  ],
  processSteps: [
    { title: "Level A1 — Foundational Basics", desc: "Mastering greetings, self-introduction, numbers, essential everyday vocabulary, and present tense conjugation." },
    { title: "Level A2 — Conversational Interaction", desc: "Describing background, immediate environment, shopping, travel, and past tense (Passé Composé / Imparfait) structures." },
    { title: "Level B1 — Independent Communication", desc: "Expressing opinions, narrating events, handling unexpected travel situations, and participating in spontaneous discussions." },
    { title: "Level B2 — Advanced Fluency & Argumentation", desc: "Understanding complex technical or abstract ideas, debating viewpoints, and writing structured formal essays." },
    { title: "DELF / TEF Exam Simulation", desc: "Taking timed mock tests aligned with the official France Éducation International and Paris Chamber of Commerce rubrics." },
  ],
  requirements: [
    "No prior knowledge required to join the foundational A1 batch.",
    "For students entering A2, B1, or B2 batches, a quick diagnostic assessment is conducted at our Patiala centre.",
    "Dedication to daily vocabulary review and audio listening drills.",
  ],
  documentsRequired: [
    "Government ID / Passport copy for exam batch registration",
    "Target study or immigration timeline to plan customized batch completion",
  ],
  relatedCountries: ["france", "canada"],
  faqs: [
    {
      question: "How many bonus CRS points can French provide for Canada PR?",
      answer: "Under Canada Express Entry, scoring NCLC 7 or higher in all four French abilities can award up to 50 additional CRS bonus points when combined with good English scores. In addition, candidates qualify for dedicated category-based French draws which frequently have lower cut-offs.",
    },
    {
      question: "How long does it take to reach B1 or B2 level in French?",
      answer: "Typically, each level (A1, A2, B1) requires 8 to 10 weeks of structured intensive classroom coaching and self-study. Reaching a solid B1/B2 standard from zero generally takes between 6 to 9 months of consistent effort at AKME Patiala.",
    },
    {
      question: "Are the classes conducted online or in person?",
      answer: "We offer both interactive classroom sessions at our modern academy Opposite Punjabi University, Patiala, and hybrid online batches with live instructor interaction.",
    },
  ],
};

export default function FrenchPage() {
  return <ServicePageTemplate data={FRENCH_DATA} />;
}
