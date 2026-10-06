import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'GRE Coaching in Patiala | Verbal & Quantitative Preparation - AKME',
  description: 'Structured GRE General Test coaching in Patiala Opposite Punjabi University. Quantitative problem solving, verbal reasoning, and analytical writing preparation.',
};

const GRE_DATA: ServiceData = {
  slug: "test-preparation/gre",
  title: "GRE General Test Coaching",
  badge: "Graduate School Admissions",
  tagline: "Rigorous Verbal Reasoning, Quantitative Reasoning, and Analytical Writing preparation for US, Canadian & European Master's programs.",
  overview: "The GRE (Graduate Record Examination) is a premier standardized test required for admission to master's, doctoral, and MBA programs globally, especially in the United States and Canada. At AKME Immigrations in Patiala, our dedicated GRE training program breaks down complex quantitative problem sets, advanced academic vocabulary, text completions, and reading comprehension passages through structured concept sessions and timed sectional mock tests.",
  keyBenefits: [
    "Comprehensive coverage of Quantitative concepts: Arithmetic, Algebra, Geometry, and Data Analysis.",
    "Root-word, contextual vocabulary building and Text Completion / Sentence Equivalence frameworks.",
    "Critical Reading strategies for complex philosophical, scientific, and humanities passages.",
    "Analytical Writing (Issue Task) essay evaluation with personalized feedback from experienced mentors.",
    "Computer-adaptive practice software mimicking the real ETS GRE test layout.",
  ],
  processSteps: [
    { title: "Diagnostic Assessment Test", desc: "Assessing current quantitative aptitude, mathematical fundamentals, and vocabulary baseline." },
    { title: "Foundation & Conceptual Review", desc: "Rebuilding core high school mathematics concepts and advanced high-frequency GRE word families." },
    { title: "Strategy & Shortcut Workshops", desc: "Mastering pacing, process of elimination, back-solving, and critical reading trap identification." },
    { title: "Sectional & Full-Length Computer Tests", desc: "Taking timed sectional drills followed by 5+ full-length computer-adaptive exams." },
    { title: "University Shortlisting Integration", desc: "Aligning your achieved GRE score with competitive US, Canadian, and German university cut-offs." },
  ],
  requirements: [
    "Graduates or final-year undergraduate students planning to pursue Master's or PhD programs overseas.",
    "Willingness to undertake daily vocabulary reviews and mathematical practice sets.",
  ],
  documentsRequired: [
    "Valid Passport (mandatory for official ETS test registration)",
    "Undergraduate mark sheets for target university shortlisting",
  ],
  relatedCountries: ["usa", "canada", "germany"],
  faqs: [
    {
      question: "What is a good GRE score for US university admissions?",
      answer: "Scores above 315-320 (with 160+ in Quantitative Reasoning) are considered competitive for top-ranked US and Canadian STEM graduate programs, though admission decisions evaluate complete profiles including GPA, SOP, and recommendation letters.",
    },
    {
      question: "How long is a GRE score valid?",
      answer: "GRE General Test scores are valid for 5 years following your official test date.",
    },
  ],
};

export default function GrePage() {
  return <ServicePageTemplate data={GRE_DATA} />;
}
