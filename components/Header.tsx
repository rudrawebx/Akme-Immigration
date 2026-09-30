'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronDown, 
  CreditCard,
  CheckCircle2, 
  MapPin, 
  Mail,
  Clock,
  ArrowRight,
  GraduationCap,
  Plane,
  Briefcase,
  BookOpen,
  Languages,
  Award
} from 'lucide-react';
import { SITE_CONFIG, COUNTRIES_LIST } from '@/lib/config';
import { trackConversion } from '@/lib/analytics';

const HEADER_SERVICES = [
  {
    title: "Study Visa",
    slug: "study-visa",
    desc: "Admissions & student visas for top global colleges",
    icon: GraduationCap,
  },
  {
    title: "Visitor & Tourist Visa",
    slug: "visitor-visa",
    desc: "Fast documentation & travel itineraries",
    icon: Plane,
  },
  {
    title: "Business & Investor Visa",
    slug: "business-immigration",
    desc: "Entrepreneur programs & branch relocation",
    icon: Briefcase,
  },
  {
    title: "IELTS Coaching",
    slug: "ielts",
    desc: "Academic & General preparation in Patiala",
    icon: BookOpen,
  },
  {
    title: "PTE Academic Prep",
    slug: "pte",
    desc: "AI computer lab practice & scoring",
    icon: Languages,
  },
  {
    title: "German & French Languages",
    slug: "language-courses",
    desc: "A1 to B2 level foreign language training",
    icon: Award,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [countriesDropdown, setCountriesDropdown] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setCountriesDropdown(false);
  }, [pathname]);

  const handlePhoneClick = () => {
    trackConversion('Phone Click', { source: 'Header' });
  };

  const handleWhatsAppClick = () => {
    trackConversion('WhatsApp Click', { source: 'Header' });
  };

  const handleCtaClick = () => {
    trackConversion('CTA Click', { label: 'Free Profile Assessment', source: 'Header' });
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200 shadow-sm">
      {/* Top Notification / Contact Bar (Clean Light Style - No Dark Blue/Black) */}
      <div className="bg-slate-50 text-slate-600 text-xs py-2 px-4 hidden md:block border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
              Urban Estate Phase II, Rajpura Road, Patiala
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <Clock className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
              Mon - Sat: 9:30 AM - 6:30 PM
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a 
              href={`mailto:${SITE_CONFIG.email}`} 
              className="flex items-center gap-1.5 hover:text-brand-red transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-brand-red" />
              {SITE_CONFIG.email}
            </a>
            <span className="text-slate-300">|</span>
            <a 
              href={`tel:${SITE_CONFIG.phoneRaw}`} 
              onClick={handlePhoneClick}
              className="flex items-center gap-1.5 font-bold text-slate-900 hover:text-brand-red transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-red" />
              {SITE_CONFIG.phoneDisplay}
            </a>
            <span className="text-slate-300">|</span>
            <Link 
              href="/payment" 
              className="flex items-center gap-1.5 font-bold text-amber-700 hover:text-amber-800 transition-colors bg-amber-50 px-2 py-0.5 rounded border border-amber-200"
            >
              <CreditCard className="w-3.5 h-3.5 text-amber-600" />
              Make a Payment
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* AKME Official Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group py-1" aria-label="AKME Immigrations Home">
            <div className="relative h-14 w-48 sm:w-56 transition-transform group-hover:scale-[1.02]">
              <Image 
                src="/images/akme-logo.png" 
                alt="AKME Immigrations Logo" 
                fill
                priority
                sizes="(max-width: 768px) 190px, 230px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-semibold text-slate-700">
            <Link 
              href="/" 
              className={`px-3 py-2 rounded-lg transition-colors ${pathname === '/' ? 'text-brand-red bg-red-50/70 font-bold' : 'hover:text-brand-red hover:bg-slate-50'}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`px-3 py-2 rounded-lg transition-colors ${pathname === '/about' ? 'text-brand-red bg-red-50/70 font-bold' : 'hover:text-brand-red hover:bg-slate-50'}`}
            >
              About Us
            </Link>

            {/* Services Dropdown (consolidated from footer list, replacing scattered individual items) */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button 
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                  ['/study-visa', '/visitor-visa', '/business-immigration', '/ielts', '/pte', '/language-courses'].includes(pathname)
                    ? 'text-brand-red bg-red-50/70 font-bold' 
                    : 'hover:text-brand-red hover:bg-slate-50'
                }`}
                aria-expanded={servicesDropdown}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 pb-2 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Our Specialized Services
                  </div>
                  <div className="pt-1">
                    {HEADER_SERVICES.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.slug}
                          href={`/${s.slug}`}
                          className="flex items-start gap-3 px-4 py-2.5 hover:bg-red-50/60 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 group-hover:text-brand-red">
                              {s.title}
                            </div>
                            <div className="text-xs text-slate-500 line-clamp-1">
                              {s.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Countries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCountriesDropdown(true)}
              onMouseLeave={() => setCountriesDropdown(false)}
            >
              <button 
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${pathname.startsWith('/countries') ? 'text-brand-red bg-red-50/70 font-bold' : 'hover:text-brand-red hover:bg-slate-50'}`}
                aria-expanded={countriesDropdown}
              >
                <span>Countries</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${countriesDropdown ? 'rotate-180' : ''}`} />
              </button>

              {countriesDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 pb-2 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Study Destinations
                  </div>
                  <div className="pt-1">
                    {COUNTRIES_LIST.map((country) => (
                      <Link
                        key={country.slug}
                        href={`/countries/${country.slug}`}
                        className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-red-50/60 hover:text-brand-red transition-colors"
                      >
                        <span>Study in {country.name}</span>
                        <span className="text-xs text-slate-400 font-mono font-bold bg-slate-100 px-1.5 py-0.5 rounded">{country.code}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="pt-2 mt-1 border-t border-slate-100 px-4">
                    <Link
                      href="/countries"
                      className="flex items-center justify-between py-1.5 text-xs font-bold text-brand-red hover:underline"
                    >
                      <span>View All Destinations</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/success-stories" 
              className={`px-3 py-2 rounded-lg transition-colors ${pathname === '/success-stories' ? 'text-brand-red bg-red-50/70 font-bold' : 'hover:text-brand-red hover:bg-slate-50'}`}
            >
              Success Stories
            </Link>
            <Link 
              href="/blog" 
              className={`px-3 py-2 rounded-lg transition-colors ${pathname === '/blog' ? 'text-brand-red bg-red-50/70 font-bold' : 'hover:text-brand-red hover:bg-slate-50'}`}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`px-3 py-2 rounded-lg transition-colors ${pathname === '/contact' ? 'text-brand-red bg-red-50/70 font-bold' : 'hover:text-brand-red hover:bg-slate-50'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA Action Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/profile-assessment"
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 xl:px-6 xl:py-3 text-sm font-bold text-white bg-brand-red hover:bg-brand-redDark rounded-xl shadow-md hover:shadow-lg transition-all whitespace-nowrap"
            >
              <span>Free Profile Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Right Quick Action & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              onClick={handlePhoneClick}
              className="p-2 text-slate-700 hover:text-brand-red hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Call AKME"
            >
              <Phone className="w-5 h-5 text-brand-red" />
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              aria-label="WhatsApp AKME"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-600 text-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-8 space-y-3 max-h-[85vh] overflow-y-auto shadow-2xl">
          <div className="flex flex-col space-y-1 text-base font-semibold text-slate-800">
            <Link 
              href="/" 
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border-y border-slate-100 py-1">
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className="w-full px-3 py-2.5 flex items-center justify-between text-left font-semibold text-slate-800"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdown && (
                <div className="pl-4 pr-2 py-1 space-y-1 text-sm bg-slate-50 rounded-xl mb-2">
                  {HEADER_SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      className="block py-2 px-2 text-slate-700 hover:text-brand-red font-medium"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Countries Accordion */}
            <div className="border-b border-slate-100 pb-1">
              <button
                onClick={() => setCountriesDropdown(!countriesDropdown)}
                className="w-full px-3 py-2.5 flex items-center justify-between text-left font-semibold text-slate-800"
              >
                <span>Countries</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${countriesDropdown ? 'rotate-180' : ''}`} />
              </button>
              {countriesDropdown && (
                <div className="pl-4 pr-2 py-1 space-y-1 text-sm bg-slate-50 rounded-xl mb-2">
                  {COUNTRIES_LIST.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/countries/${c.slug}`}
                      className="block py-2 px-2 text-slate-700 hover:text-brand-red font-medium"
                    >
                      Study in {c.name}
                    </Link>
                  ))}
                  <Link
                    href="/countries"
                    className="block py-2 px-2 text-xs font-bold text-brand-red uppercase"
                  >
                    View All Destinations →
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/success-stories" 
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Success Stories
            </Link>
            <Link 
              href="/blog" 
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Latest News & Blog
            </Link>
            <Link 
              href="/payment" 
              className="px-3 py-2.5 rounded-lg text-amber-800 bg-amber-50 hover:bg-amber-100 font-bold flex items-center gap-2 border border-amber-200"
            >
              <CreditCard className="w-4 h-4 text-amber-600" />
              Make a Payment
            </Link>
            <Link 
              href="/contact" 
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <Link
              href="/profile-assessment"
              onClick={handleCtaClick}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-center font-bold text-white bg-brand-red hover:bg-brand-redDark rounded-xl shadow transition-colors"
            >
              <span>Free Profile Assessment</span>
            </Link>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                onClick={handlePhoneClick}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
