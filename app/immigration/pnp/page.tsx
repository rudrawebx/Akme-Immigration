import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Canada Provincial Nominee Program (PNP) Guidance in Patiala | AKME Immigrations',
  description: 'Explore provincial nomination pathways for Ontario, British Columbia, Alberta, Saskatchewan, and Manitoba at AKME Immigrations Patiala, Opposite Punjabi University.',
};

const PNP_DATA: ServiceData = {
  slug: "immigration/pnp",
  title: "Provincial Nominee Programs (PNP)",
  badge: "Provincial Pathways",
  tagline: "Targeted provincial stream selection to secure a 600-point Express Entry nomination or direct base provincial certificate.",
  overview: "Canada's provinces and territories operate designated Provincial Nominee Programs (PNP) tailored to their local economic and labor market demands. Securing an enhanced provincial nomination awards an additional 600 points toward your Express Entry Comprehensive Ranking System (CRS) score, virtually assuring an Invitation to Apply (ITA) in the subsequent federal draw.",
  keyBenefits: [
    "Targeted selection across OINP (Ontario), BCPNP (British Columbia), AAIP (Alberta), and SINP (Saskatchewan).",
    "600 additional CRS points upon provincial nomination certificate issuance.",
    "Streams available for candidates with specific occupational experience or regional in-demand jobs.",
    "Comprehensive guidance on Expression of Interest (EOI) ranking algorithms across provinces.",
    "Direct verification of job offers and employer compliance documentation where required.",
  ],
  processSteps: [
    { title: "Provincial Stream Matching", desc: "Assessing your occupation NOC code, work history, and qualifications against active provincial in-demand lists." },
    { title: "Federal Express Entry Profile Alignment", desc: "Setting up an active Express Entry profile indicating interest in target provinces." },
    { title: "Provincial EOI or Notification of Interest (NOI)", desc: "Submitting provincial Expressions of Interest or receiving an official NOI from target provinces." },
    { title: "Full Provincial Nomination Filing", desc: "Lodging the exhaustive provincial application package within strict statutory deadlines (typically 14 to 45 days)." },
    { title: "600-Point Award & Federal PR Submission", desc: "Accepting the nomination in your Express Entry portal, claiming 600 points, and filing the final federal PR application." },
  ],
  requirements: [
    "Active profile in the federal Express Entry pool (for enhanced PNP streams).",
    "Work experience corresponding to an in-demand occupation listed by the nominating province.",
    "Valid Educational Credential Assessment (ECA) report.",
    "Language benchmark scores (typically CLB 6 to CLB 8 depending on the province and stream).",
    "Demonstrable intention to reside and settle permanently in the nominating province.",
  ],
  documentsRequired: [
    "Express Entry Profile Number and Job Seeker Validation Code",
    "Detailed employment reference letters aligned to specific provincial requirements",
    "Educational Credential Assessment (ECA) and academic degrees",
    "Proof of settlement funds verified via official bank letters",
    "Identity documentation, police clearances, and provincial settlement intention statement",
  ],
  relatedCountries: ["canada"],
  faqs: [
    {
      question: "What is the difference between an Enhanced PNP and a Base PNP?",
      answer: "Enhanced PNP streams operate through the federal Express Entry system and award 600 CRS points upon nomination. Base PNP streams operate outside Express Entry, where the applicant applies directly to the province and submits a paper or non-Express Entry digital PR application to IRCC.",
    },
    {
      question: "Do I need a Canadian job offer to qualify for PNP?",
      answer: "Not necessarily. Several provincial streams (such as Ontario Human Capital Priorities, Saskatchewan Occupations In-Demand, and Alberta Express Entry) regularly invite candidates without a pre-existing Canadian job offer based on in-demand occupation codes and CRS thresholds.",
    },
    {
      question: "Can I move to another province after receiving PR through PNP?",
      answer: "Under the Canadian Charter of Rights and Freedoms, permanent residents have mobility rights. However, applicants must have a genuine intention to reside in the nominating province at the time of application and settlement.",
    },
  ],
};

export default function PNPPage() {
  return <ServicePageTemplate data={PNP_DATA} />;
}
