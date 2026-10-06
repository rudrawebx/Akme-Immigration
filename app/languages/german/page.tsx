import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'German Language Classes in Patiala | A1, A2, B1, B2 - AKME',
  description: 'Certified German language coaching in Patiala Opposite Punjabi University. Prepare for Goethe-Zertifikat A1-B2. Essential for tuition-free study in Germany, APS verification, and EU jobs.',
};

const GERMAN_DATA: ServiceData = {
  slug: "languages/german",
  title: "German Language Training (A1 - B2)",
  badge: "Goethe Exam Prep",
  tagline: "Certified German language courses in Patiala for tuition-free study in Germany, APS certification, and European careers.",
  overview: "Germany is Europe's premier industrial and engineering leader, offering tuition-free or nominal-cost higher education at world-ranked public universities. While many graduate programs are taught in English, acquiring German language proficiency (A1 through B2) is crucial for securing part-time student jobs, passing embassy visa interviews, and obtaining post-graduation EU Blue Card employment. At AKME Patiala Opposite Punjabi University, we offer structured Goethe-Institut aligned training across all CEFR levels.",
  keyBenefits: [
    "Full CEFR framework training: A1 (Beginner), A2 (Elementary), B1 (Intermediate), and B2 (Upper Intermediate).",
    "Specialized focus on German grammatical cases (Nominativ, Akkusativ, Dativ, Genitiv) and sentence structuring.",
    "Comprehensive preparation for official Goethe-Zertifikat examinations.",
    "Small classroom batches allowing active German conversation, dialogue simulations, and pronunciation drills.",
    "Integrated counselling for German public university admissions, APS certificates, and Blocked Accounts (Sperrkonto).",
  ],
  processSteps: [
    { title: "Level A1 — Core Foundations", desc: "Alphabet, pronunciation, basic vocabulary, everyday greetings, introducing oneself, shopping, and asking simple questions." },
    { title: "Level A2 — Daily Situations & Syntax", desc: "Handling routine conversations, talking about past events (Perfekt), describing profession, health, and directions." },
    { title: "Level B1 — Independent Language Use", desc: "Expressing opinions, dreams, and goals, understanding main points of clear standard input on familiar matters, and basic technical contexts." },
    { title: "Level B2 — Advanced Fluency & Academic Preparation", desc: "Understanding complex texts, technical discussions in your field of specialization, and expressing yourself fluently with native speakers." },
    { title: "Goethe Exam Drills & Mock Tests", desc: "Rigorous practice with official Goethe-Zertifikat sample papers under strict exam timing." },
  ],
  requirements: [
    "Open to all students, graduates, and professionals planning to study or work in Germany, Austria, or Switzerland.",
    "No prior German knowledge required for the A1 level batch.",
    "Commitment to daily vocabulary drills and interactive classroom exercises.",
  ],
  documentsRequired: [
    "Valid Passport / ID copy for Goethe exam batch registration",
    "Target university intake (Winter/Summer) for customized study timeline planning",
  ],
  relatedCountries: ["germany", "europe"],
  faqs: [
    {
      question: "Is German language mandatory if my university program is taught in English?",
      answer: "While German is not strictly mandatory for academic admission to English-taught master's degrees, knowing German (at least A1 or A2) is practically essential for daily life, part-time student work, campus networking, and long-term post-study employment in Germany.",
    },
    {
      question: "Which German level is required for German-taught university degrees?",
      answer: "Degree programs taught in German typically require proof of B2 or C1 level (such as TestDaF 4x4 or Goethe-Zertifikat C1). AKME Patiala provides foundational and intermediate training up to B2 level.",
    },
    {
      question: "Where are the German classes held?",
      answer: "Batches are conducted in person at our dedicated academy Opposite Punjabi University, Patiala, featuring audio equipment and multimedia learning tools.",
    },
  ],
};

export default function GermanPage() {
  return <ServicePageTemplate data={GERMAN_DATA} />;
}
