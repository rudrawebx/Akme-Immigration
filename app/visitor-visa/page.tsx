import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Tourist & Visitor Visa Assistance | AKME Immigrations',
  description: 'Apply for tourist visas, family visitor visas, business visitor permits, and Schengen tourist visas with verified documentation and cover letters.',
};

const VISITOR_VISA_DATA: ServiceData = {
  slug: "visitor-visa",
  title: "Visitor & Tourist Visa",
  badge: "High Precision Filing",
  tagline: "Comprehensive documentation, cover letter drafting, and genuine travel intent substantiation for tourist and family visitor visas.",
  overview: "Visitor visas are frequently refused when applicants fail to demonstrate strong economic ties to their home country or present ambiguous itineraries. AKME Immigrations prepares watertight application files emphasizing genuine temporary intent, verified financial capability, and detailed travel schedules.",
  keyBenefits: [
    "Custom travel itinerary preparation and flight/hotel reservation structuring.",
    "Drafting persuasive applicant cover letters explaining purpose and duration of visit.",
    "Formulation of strong ties to India (property valuation, family ties, ongoing employment).",
    "Sponsorship letter verification for family reunions, convocation visits, and weddings.",
    "Refusal rectification for prior tourist visa rejections under Section 179/214(b).",
  ],
  processSteps: [
    { title: "Travel Purpose & Document Audit", desc: "Assessing intent of visit (tourism, family visit, business conference, convocation ceremony)." },
    { title: "Financial & Economic Ties Preparation", desc: "Compiling bank statements, ITRs, property evaluations, and employment leave letters." },
    { title: "Invitation & Cover Letter Formulation", desc: "Drafting personalized letters of support and sponsor documentation." },
    { title: "Embassy Portal Application Lodgment", desc: "Accurate completion of DS-160 (USA), IRCC Portal (Canada), ImmiAccount (Australia), or VFS/TLS forms." },
    { title: "Biometric Appointment & Interview Coaching", desc: "Scheduling biometric dates and mock questions for in-person consular interviews." },
  ],
  requirements: [
    "Valid passport with at least 6 months validity beyond intended stay.",
    "Demonstrable ties to home country (employment letter, business ownership, family ties).",
    "Adequate liquid savings to cover the total estimated cost of your trip.",
    "Explicit statement of intent to depart upon conclusion of authorized stay.",
  ],
  documentsRequired: [
    "Original Passport & travel history stamps",
    "Last 3 years Income Tax Returns (ITR / Form 16)",
    "Last 6 months updated bank statement with stamp",
    "Employment Leave Sanction Letter / Business Registration (GST)",
    "Invitation letter from host abroad (if visiting relatives)",
    "Proof of host legal status (PR card, citizen passport, or study permit)",
    "Property valuation or CA net worth statement (if applicable)",
  ],
  relatedCountries: ["canada", "australia", "uk", "usa", "germany"],
  faqs: [
    {
      question: "Can parents visit their children studying in Canada or Australia?",
      answer: "Yes, parents can apply for a standard Visitor Visa or Canada Super Visa (multi-entry up to 10 years with stays up to 5 years per visit) by presenting the student's enrollment letter, study permit copy, and accommodation details.",
    },
    {
      question: "What is the primary reason visitor visas get rejected?",
      answer: "The most common refusal grounds are 'insufficient ties to home country' and 'inadequate funds'. AKME focuses on assembling concrete proof of ongoing business, employment, and familial responsibilities in India to satisfy visa officers.",
    },
  ],
};

export default function VisitorVisaPage() {
  return <ServicePageTemplate data={VISITOR_VISA_DATA} />;
}
