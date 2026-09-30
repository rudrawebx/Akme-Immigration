import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  CreditCard,
  Lock
} from 'lucide-react';
import { SITE_CONFIG, COUNTRIES_LIST } from '@/lib/config';

const FOOTER_SERVICES = [
  { title: "Study Visa", slug: "study-visa" },
  { title: "Visitor & Tourist Visa", slug: "visitor-visa" },
  { title: "Business & Investor Visa", slug: "business-immigration" },
  { title: "IELTS Coaching", slug: "ielts" },
  { title: "PTE Academic Prep", slug: "pte" },
  { title: "German & French Languages", slug: "language-courses" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-700 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          
          {/* Brand Info & Address */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block bg-white p-2.5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="relative h-12 w-48">
                <Image 
                  src="/images/akme-logo.png" 
                  alt="AKME Immigrations Logo" 
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pr-4">
              AKME Immigrations & Education is Patiala’s premier overseas education consultancy and language preparation academy. We guide students and families with complete legal transparency and direct institutional fee processing.
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{SITE_CONFIG.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="font-bold text-slate-900 hover:text-brand-red transition-colors">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="font-medium text-slate-700 hover:text-brand-red transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>{SITE_CONFIG.hours.days}: {SITE_CONFIG.hours.time}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a 
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
                Chat with Counsellor
              </a>
              <Link 
                href="/payment" 
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-xl border border-amber-200 transition-colors shadow-sm"
              >
                <CreditCard className="w-3.5 h-3.5 text-amber-600" />
                Pay Online
              </Link>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/${service.slug}`} 
                    className="hover:text-brand-red hover:underline transition-colors block font-medium"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Countries */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
              Destinations
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {COUNTRIES_LIST.map((country) => (
                <li key={country.slug}>
                  <Link 
                    href={`/countries/${country.slug}`} 
                    className="hover:text-brand-red hover:underline transition-colors block font-medium"
                  >
                    Study in {country.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/countries" className="text-brand-red text-xs font-bold hover:underline block pt-1">
                  View All Countries →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick & Legal Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-brand-red font-medium transition-colors">
                  About AKME
                </Link>
              </li>
              <li>
                <Link href="/profile-assessment" className="hover:text-brand-red font-medium transition-colors">
                  Profile Assessment
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-brand-red font-medium transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-red font-medium transition-colors">
                  Visa Updates & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-red font-medium transition-colors">
                  Contact Office
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-200">
                <Link href="/privacy-policy" className="hover:text-brand-red transition-colors text-xs">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-red transition-colors text-xs">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-brand-red transition-colors text-xs">
                  Refund & Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-brand-red transition-colors text-xs">
                  Cookie Policy
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/admin/login" className="text-slate-400 hover:text-slate-700 transition-colors text-xs flex items-center gap-1 font-medium">
                  <Lock className="w-3 h-3" />
                  Staff Portal
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Strip */}
        <div className="py-6 border-b border-slate-200 text-xs text-slate-500 leading-relaxed">
          <p className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Immigration & Regulatory Disclaimer:</strong> {SITE_CONFIG.disclaimer}
            </span>
          </p>
        </div>

        {/* Copyright & Security */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Urban Estate Phase II, Patiala, Punjab</span>
            <span>•</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              256-Bit SSL Encrypted
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
