import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  HelpCircle,
  Clock, 
  Sparkles,
  Globe
} from 'lucide-react';
import { SITE_CONFIG, COUNTRIES_LIST, SERVICES_LIST } from '@/lib/config';
import AssessmentForm from '@/components/AssessmentForm';
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion';
import TrustStrip from '@/components/TrustStrip';

export interface ServiceData {
  slug: string;
  title: string;
  badge: string;
  tagline: string;
  overview: string;
  keyBenefits: string[];
  processSteps: Array<{ title: string; desc: string }>;
  requirements: string[];
  documentsRequired: string[];
  relatedCountries: string[];
  faqs: FAQItem[];
}

export default function ServicePageTemplate({ data }: { data: ServiceData }) {
  const relatedCountriesList = COUNTRIES_LIST.filter(c => 
    data.relatedCountries.includes(c.slug) || data.relatedCountries.includes(c.name)
  );

  return (
    <div className="bg-slate-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 py-14 sm:py-20 relative overflow-hidden border-b border-slate-200/80">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-brand-red text-xs font-bold uppercase rounded-full border border-red-200">
              <Sparkles className="w-3.5 h-3.5" />
              {data.badge}
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading">
              {data.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {data.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="#form"
                className="px-6 py-3.5 bg-brand-red hover:bg-brand-redDark text-white font-bold rounded-xl shadow-lg transition-colors inline-flex items-center gap-2 text-sm"
              >
                <span>Free Profile Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20AKME,%20I%20am%20inquiring%20about%20your%20${encodeURIComponent(data.title)}%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-colors inline-flex items-center gap-2 text-sm"
              >
                <span>WhatsApp Advisor</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Overview & Value Proposition */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 font-heading">
                Service Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {data.overview}
              </p>
              
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-3">
                  Key Advantages with AKME
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {data.keyBenefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Systematic Process */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 font-heading">
                Our Procedural Roadmap
              </h2>
              <div className="space-y-4">
                {data.processSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="w-8 h-8 rounded-xl bg-brand-red text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">{step.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility & Documents Required */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
                  Eligibility Criteria
                </h2>
                <ul className="space-y-2 text-sm text-slate-700">
                  {data.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 flex-shrink-0"></span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Standard Documentation Checklist
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
                  {data.documentsRequired.map((doc, i) => (
                    <div key={i} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Destinations */}
            {relatedCountriesList.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Popular Countries for this Service
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {relatedCountriesList.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/countries/${c.slug}`}
                      className="p-3 bg-slate-50 hover:bg-red-50 hover:border-brand-red/30 rounded-xl border border-slate-200 transition-colors text-center block"
                    >
                      <span className="block font-bold text-xs sm:text-sm text-slate-900">{c.name}</span>
                      <span className="text-[11px] text-brand-red font-medium">Explore Guidelines →</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 font-heading mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {data.faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-100 pb-4 last:border-b-0">
                    <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Lead Form */}
          <div className="lg:col-span-5" id="form">
            <div className="sticky top-24">
              <AssessmentForm
                defaultService={data.title}
                title={`Inquire: ${data.title}`}
                subtitle="Fill out this form to connect with our specialized counsellor in Patiala."
              />
            </div>
          </div>

        </div>
      </div>

      <TrustStrip />
    </div>
  );
}
