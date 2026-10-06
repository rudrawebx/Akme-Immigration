import { Metadata } from 'next';
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Visa Refusal Case Assessment in Patiala | AKME Immigrations',
  description: 'Experienced visa refusal case auditing in Patiala. GCMS notes review, documentation gap analysis, financial reassessment, and Statement of Purpose restructuring Opposite Punjabi University.',
};

const REFUSED_CASES_DATA: ServiceData = {
  slug: "immigration/refused-cases",
  title: "Visa Refusal Case Assessment",
  badge: "Specialized Analysis",
  tagline: "Forensic case reviews, GCMS/ATIP notes auditing, and transparent file restructuring for previous visa refusals.",
  overview: "Facing a visa refusal for a study permit, visitor visa, or immigration application can be emotionally and financially draining. However, a refusal is not necessarily the end of the road. At AKME Immigrations in Patiala, we provide an objective, forensic assessment of your refusal letter, order official officer notes (such as Canada GCMS notes), identify underlying statutory concerns, and determine honestly whether the case can be legitimately strengthened or if re-application is unviable.",
  keyBenefits: [
    "Comprehensive GCMS (Global Case Management System) notes application and line-by-line officer remark analysis.",
    "Identification of root refusal grounds: purpose of visit, ties to home country, financial sufficiency, or study plan logic.",
    "Honest feasibility assessment: we tell you transparently if a case cannot or should not be re-applied.",
    "Substantive Statement of Purpose (SOP) restructuring directly answering previous visa officer objections.",
    "Zero false guarantees: we never promise guaranteed approvals on refused cases.",
  ],
  processSteps: [
    { title: "Refusal Documentation Audit", desc: "Reviewing your previous application copy, submitted documents, and the official refusal letter." },
    { title: "GCMS / Case Notes Procurement", desc: "Requesting detailed officer notes from IRCC or respective immigration authorities to uncover the unvarnished rationale." },
    { title: "Gap Analysis & Feasibility Check", desc: "Identifying whether gaps involve financial documentation, career progression disconnects, or document discrepancies." },
    { title: "Evidence Rectification & New Evidence", desc: "Collecting authentic supplementary proofs (improved financial trails, property valuations, employer affidavits, or academic re-evaluations)." },
    { title: "Revised Cover Letter & Re-Lodgment", desc: "Drafting a point-by-point factual response letter addressing each previous refusal point with verifiable cross-references." },
  ],
  requirements: [
    "Full copy of previously lodged visa application form and all submitted documents.",
    "Official refusal letter issued by the embassy or high commission.",
    "GCMS notes (if already obtained; if not, AKME can guide the request).",
    "Truthful disclosure of all previous travel history and any other refusal records.",
  ],
  documentsRequired: [
    "Complete prior visa application forms (e.g. IMM 1294, IMM 5257)",
    "Official embassy refusal letter with standard checklist boxes or refusal clauses",
    "GCMS notes or ATIP response files (if available)",
    "Previously submitted Statement of Purpose / Cover Letter",
    "All academic mark sheets, degrees, and previous IELTS/PTE score reports",
    "Current financial documentation (updated bank statements, ITRs, property affidavits)",
  ],
  relatedCountries: ["canada", "australia", "uk", "usa"],
  faqs: [
    {
      question: "Why do visa refusals happen most frequently?",
      answer: "Common refusal reasons include: 1) Visa officer not satisfied that the applicant will leave the country upon conclusion of their authorized stay (Section 216/Section 179 for Canada), 2) Financial documentation lacking verifiable source of funds or sudden unexplainable bank deposits, 3) Academic disconnect where the chosen program does not logically build upon prior studies, and 4) Weak or vague Statement of Purpose (SOP).",
    },
    {
      question: "What are GCMS notes and why are they necessary?",
      answer: "The Global Case Management System (GCMS) is the internal database used by Canadian immigration officers. Standard refusal letters contain generic template text; GCMS notes reveal the actual hand-written comments and specific concerns recorded by the visa officer during the decision.",
    },
    {
      question: "Does AKME guarantee that a refused case will be approved on re-filing?",
      answer: "NEVER. No legitimate immigration consultancy can or should guarantee a visa approval. The final decision rests entirely with the statutory visa officer. What AKME provides is rigorous legal and factual scrutiny to ensure that every identified weakness is genuinely resolved before a file is submitted again.",
    },
    {
      question: "When should a candidate NOT re-apply after a refusal?",
      answer: "If the refusal is based on confirmed misrepresentation (e.g. fraudulent documents resulting in a 5-year ban under Section 40), or if the applicant's genuine circumstances cannot be improved with authentic evidence, we advise against wasting time and money on a repeat application.",
    },
  ],
};

export default function RefusedCasesPage() {
  return <ServicePageTemplate data={REFUSED_CASES_DATA} />;
}
