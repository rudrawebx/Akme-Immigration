import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Spoken English & Personality Development in Patiala | AKME',
  description: 'Master English fluency, communication confidence, and interview presentation in Patiala Opposite Punjabi University. Experienced trainers and personalized speaking cabins.',
};

const SPOKEN_ENGLISH_DATA: ServiceData = {
  slug: "languages/spoken-english",
  title: "Spoken English & Personality Development",
  badge: "Fluency & Confidence",
  tagline: "Overcome hesitation, master natural conversational English, and build interview confidence in Patiala.",
  overview: "Fluent English communication is the foundation of academic success, visa interview confidence, and global professional careers. Many students understand grammar rules in theory but hesitate when speaking spontaneously in public or official environments. At AKME Patiala Opposite Punjabi University, our Spoken English and Personality Development program eliminates hesitation through daily group discussions, real-world role-plays, vocabulary enhancement, and mock visa/embassy interview rehearsals.",
  keyBenefits: [
    "Dedicated speaking cabins for daily 1-on-1 fluency and pronunciation assessment.",
    "Comprehensive coverage of practical spoken grammar, sentence framing, and idiomatic expressions.",
    "Mock visa officer interview rehearsals with targeted feedback on poise, body language, and clarity.",
    "Group discussions, extempore speech exercises, and public presentation workshops.",
    "Supportive learning atmosphere designed for students from all academic backgrounds.",
  ],
  processSteps: [
    { title: "Hesitation Elimination & Foundation", desc: "Overcoming stage fear, basic sentence building, everyday vocabulary, and conversational icebreakers." },
    { title: "Pronunciation & Phonetics Drills", desc: "Refining vowel sounds, word stress, clear diction, and elimination of Mother Tongue Influence (MTI)." },
    { title: "Interactive Dialogues & Group Discussions", desc: "Participating in current affairs debates, situational role-plays, and impromptu discussions." },
    { title: "Professional Presentation & Body Language", desc: "Mastering formal greetings, email etiquette, telephone conversations, and non-verbal posture." },
    { title: "Mock Embassy & University Interviews", desc: "Comprehensive simulation of genuine student visa and job interviews with immediate mentor critiques." },
  ],
  requirements: [
    "Open to students, job seekers, working professionals, and homemakers.",
    "No minimum qualification required; batches are grouped by current baseline fluency.",
  ],
  documentsRequired: [
    "Enrolment details and personal scheduling availability",
  ],
  relatedCountries: ["canada", "uk", "australia", "usa"],
  faqs: [
    {
      question: "How long does it take to become fluent in spoken English?",
      answer: "Most students observe a remarkable shift in self-confidence within 4 to 6 weeks of daily active participation. Our 8-week comprehensive course provides structured, sustained conversational practice.",
    },
    {
      question: "Will this course help me prepare for an embassy visa interview?",
      answer: "Yes, our curriculum includes specialized embassy interview preparation, training you to articulate your course selection, financial standing, and home ties clearly and truthfully without nervousness.",
    },
  ],
};

export default function SpokenEnglishPage() {
  return <ServicePageTemplate data={SPOKEN_ENGLISH_DATA} />;
}
