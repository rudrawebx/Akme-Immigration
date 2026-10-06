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
  Lock,
  ArrowRight
} from 'lucide-react';
import { 
  SITE_CONFIG, 
  STUDY_ABROAD_COUNTRIES, 
  IMMIGRATION_SERVICES, 
  TEST_PREPARATION_COURSES, 
  LANGUAGE_COURSES 
} from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-700 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Banner: New Centre Location */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Visit Our Patiala Centre
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
              AKME Immigrations & Education — SCO 31, Opposite Punjabi University, Patiala
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Walk in for face-to-face counselling, language demo sessions, and free profile assessments.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/profile-assessment"
              className="px-5 py-3 rounded-xl bg-brand-red hover:bg-brand-redDark text-white text-xs sm:text-sm font-bold shadow-xs transition-colors inline-flex items-center gap-2"
            >
              <span>Get Free Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-colors inline-flex items-center gap-2 border border-slate-200"
            >
              <MapPin className="w-4 h-4 text-brand-red" />
              <span>Get Directions</span>
            </Link>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-200 text-xs sm:text-sm">
          
          {/* Col 1 & 2: Brand Info & Exact Location */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block bg-white p-2.5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="relative h-12 w-48">
                <Image 
                  src="/images/akme-logo.png" 
                  alt="AKME Immigrations Logo" 
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            
            <p className="text-xs text-slate-600 leading-relaxed pr-2">
              Patiala's Trusted Immigration & Education Institute. Comprehensive overseas admissions, transparent immigration pathways, structured test preparation (IELTS/PTE), and foreign language training.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span className="font-semibold text-slate-900 leading-snug">
                  SCO 31, Opp. Punjab &amp; Sind Bank, Walia Enclave, Opp. Punjabi University, Patiala
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="font-bold text-slate-900 hover:text-brand-red transition-colors">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="font-medium text-slate-700 hover:text-brand-red transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>{SITE_CONFIG.hours.days}: {SITE_CONFIG.hours.time}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              <a 
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
                WhatsApp AKME
              </a>
              <Link 
                href="/payment" 
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-xl border border-amber-200 transition-colors shadow-xs"
              >
                <CreditCard className="w-3.5 h-3.5 text-amber-600" />
                Pay Online
              </Link>
            </div>
          </div>

          {/* Col 3: Study Abroad Countries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Study Abroad
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {STUDY_ABROAD_COUNTRIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/countries/${c.slug}`} className="hover:text-brand-red hover:underline transition-colors block">
                    {c.flag} Study in {c.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/study-abroad" className="text-brand-red font-bold hover:underline block">
                  All Destinations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Immigration Pathways */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Immigration
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {IMMIGRATION_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={s.href} className="hover:text-brand-red hover:underline transition-colors block">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Test Prep & Languages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Test Prep & Languages
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {TEST_PREPARATION_COURSES.slice(0, 4).map((t) => (
                <li key={t.slug}>
                  <Link href={t.href} className="hover:text-brand-red hover:underline transition-colors block">
                    {t.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-100">
                <Link href="/languages/french" className="hover:text-brand-red hover:underline transition-colors block">
                  French Classes (A1-B2)
                </Link>
              </li>
              <li>
                <Link href="/languages/german" className="hover:text-brand-red hover:underline transition-colors block">
                  German Classes (A1-B2)
                </Link>
              </li>
              <li>
                <Link href="/languages/spoken-english" className="hover:text-brand-red hover:underline transition-colors block">
                  Spoken English
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 6: Company & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Quick Links & Legal
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link href="/about" className="hover:text-brand-red font-medium transition-colors">
                  About AKME
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
                  Contact Centre
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-200">
                <Link href="/privacy-policy" className="hover:text-brand-red transition-colors text-[11px]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-red transition-colors text-[11px]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-brand-red transition-colors text-[11px]">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-brand-red transition-colors text-[11px]">
                  Cookie Policy
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/admin/login" className="text-slate-400 hover:text-slate-700 transition-colors text-[11px] flex items-center gap-1 font-medium">
                  <Lock className="w-3 h-3" />
                  Staff Portal
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory Disclaimer */}
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
          <div className="flex items-center gap-4">
            <span className="font-medium text-slate-700">Opposite Punjabi University, Patiala</span>
            <span>•</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Verified & Secure
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
