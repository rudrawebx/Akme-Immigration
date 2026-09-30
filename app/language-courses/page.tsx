import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Foreign Language Training (German & French) in Patiala | AKME',
  description: 'Certified German (Goethe A1-B2) and French language courses in Patiala. Crucial for tuition-free German university admissions and Canada PR Express Entry French points.',
};

const LANGUAGE_DATA: ServiceData = {
  slug: "language-courses",
  title: "German & French Language Classes",
  badge: "CEFR Aligned",
  tagline: "Certified A1 to B2 level foreign language batches for European university admissions and Canada Express Entry French bonus points.",
  overview: "Fluency in European languages unlocks exceptional opportunities: German proficiency enables zero-tuition study at top public universities in Germany, while French proficiency (NCLC 7) awards up to 50 additional bonus CRS points under Canada Express Entry category-based draws.",
  keyBenefits: [
    "Classes aligned with CEFR (Common European Framework of Reference for Languages) standards.",
    "Goethe-Zertifikat preparation for German (A1, A2, B1, B2).",
    "TEF / TCF Canada preparation for French language Express Entry category draws.",
    "Interactive conversational drills, listening labs, and cultural integration insights.",
    "Certified multilingual instructors with proven track records in language pedagogy.",
  ],
  processSteps: [
    { title: "Target Objective Consultation", desc: "Determining whether language learning is for German university admission or Canada PR points." },
    { title: "Level A1 / A2 Foundation", desc: "Mastering pronunciation, daily conversational grammar, sentence structures, and basic vocabulary." },
    { title: "Level B1 Intermediate", desc: "Developing professional fluency, comprehension of complex texts, and spontaneous speaking skills." },
    { title: "Level B2 Advanced (Study / Professional)", desc: "Technical discourse, university lecture note-taking, and professional workplace communication." },
    { title: "Goethe / TEF Examination Practice", desc: "Practicing past official examination papers and simulated speaking interviews." },
  ],
  requirements: [
    "No prior knowledge required for Level A1 foundation batches.",
    "Commitment to daily 1.5 - 2 hour classes and audio-visual assignments.",
  ],
  documentsRequired: [
    "Identification proof (Aadhaar or Passport)",
    "Passport size photographs",
  ],
  relatedCountries: ["germany", "france", "canada"],
  faqs: [
    {
      question: "How many bonus points does French add to Canada PR?",
      answer: "Candidates who score NCLC 7 or higher in all four French competencies (Listening, Speaking, Reading, Writing) earn up to 50 additional points in Express Entry and qualify for dedicated French category-based draws with significantly lower CRS cut-offs.",
    },
    {
      question: "Is German required for engineering degrees in Germany?",
      answer: "While many master's degrees are taught in English, having at least A1 or A2 German certification is often preferred for visa issuance and is essential for student jobs, internships, and everyday social life in Germany.",
    },
  ],
};

export default function LanguageCoursesPage() {
  return <ServicePageTemplate data={LANGUAGE_DATA} />;
}
