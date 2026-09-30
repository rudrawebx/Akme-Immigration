import { Metadata } from 'next';
import Link from 'next/link';
import { COUNTRIES_LIST } from '@/lib/config';
import CountryCard from '@/components/CountryCard';
import TrustStrip from '@/components/TrustStrip';
import { Globe, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Study Abroad Destinations & Countries | AKME Immigrations',
  description: 'Explore leading international destinations for higher education, student visas, and post-study work permits including Canada, Australia, UK, USA, Germany, Ireland, and New Zealand.',
};

export default function CountriesPage() {
  return (
    <div className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-brand-red text-xs font-semibold rounded-full border border-red-100 uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Education Destinations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading">
            Choose Your Ideal Country
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Compare post-study work rights, estimated tuition ranges, top programs, and admission requirements across premier study-abroad nations.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {COUNTRIES_LIST.map((country) => (
            <CountryCard
              key={country.slug}
              slug={country.slug}
              name={country.name}
              code={country.code}
              tagline={country.tagline}
              intakes={country.intakes}
              postStudyWork={country.postStudyWork}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 text-center max-w-4xl mx-auto space-y-6 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">
            Unsure which destination matches your budget and qualifications?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Book a complimentary counselling session with an AKME certified country specialist.
          </p>
          <div className="pt-2">
            <Link
              href="/profile-assessment"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-brand-red hover:bg-brand-redDark shadow transition-all"
            >
              <span>Get Free Destination Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
      <div className="mt-16">
        <TrustStrip />
      </div>
    </div>
  );
}
