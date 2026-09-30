import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Business & Investor Immigration Programs | AKME Immigrations',
  description: 'Advisory for high-net-worth individuals, business owners, and startup entrepreneurs seeking investor visas, branch expansion, and residency pathways abroad.',
};

const BUSINESS_DATA: ServiceData = {
  slug: "business-immigration",
  title: "Business & Investor Immigration",
  badge: "Executive Solutions",
  tagline: "Strategic international expansion, entrepreneurial visas, and investor residency for established business owners and founders.",
  overview: "High-net-worth entrepreneurs and established business proprietors can establish branch operations, acquire international businesses, or invest in government-backed enterprise schemes to secure permanent residency pathways.",
  keyBenefits: [
    "Comprehensive net-worth audit and legitimate fund tracking.",
    "Business plan drafting aligned with destination country economic development criteria.",
    "Guidance on Intra-Company Transferees (ICT) and Owner-Operator frameworks.",
    "Exploration of European Golden Visas and Caribbean citizenship programs.",
    "Full coordination with certified legal partners and chartered accounts.",
  ],
  processSteps: [
    { title: "Net Worth & Business Track-Record Audit", desc: "Verifying qualifying ownership stake, enterprise turnover, and audited accounts." },
    { title: "Program & Destination Selection", desc: "Choosing suitable investor, startup, or intra-company transfer options (Canada C11/ICT, UK Innovator, European Residency)." },
    { title: "Comprehensive Business Plan Drafting", desc: "Structuring economic impact, hiring forecasts, and operational feasibility studies." },
    { title: "Corporate Entity Setup & Registration", desc: "Coordinating with overseas corporate registries and banking entities." },
    { title: "Visa Lodgment & Relocation", desc: "Submitting investor immigration portfolios to the designated immigration department." },
  ],
  requirements: [
    "Demonstrable business ownership or senior management experience for at least 3 of past 5 years.",
    "Legally earned personal net worth meeting program thresholds.",
    "Commitment to invest specified capital into a viable operating business.",
    "Viable business concept generating local employment opportunities.",
  ],
  documentsRequired: [
    "Audited company financial statements & balance sheets for last 3-5 years",
    "Company Registration Certificates & GST returns",
    "Personal Bank Statements, Property Valuations, and Net Worth Certificate",
    "Detailed Professional Business Plan & Financial Model",
    "Identity, marital, and personal tax documentation",
  ],
  relatedCountries: ["canada", "uk", "usa", "germany"],
  faqs: [
    {
      question: "Can I transfer my existing Indian business to Canada or the UK?",
      answer: "Yes, programs like the Intra-Company Transferee (ICT) allow established Indian enterprises to dispatch key executives or specialized knowledge personnel to an overseas affiliate or subsidiary.",
    },
  ],
};

export default function BusinessImmigrationPage() {
  return <ServicePageTemplate data={BUSINESS_DATA} />;
}
