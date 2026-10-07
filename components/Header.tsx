'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  CreditCard,
  MapPin, 
  Mail, 
  Clock, 
  ArrowRight,
  GraduationCap,
  FileCheck2,
  BookOpen,
  Languages,
  Sparkles
} from 'lucide-react';
import { 
  SITE_CONFIG, 
  STUDY_ABROAD_COUNTRIES, 
  IMMIGRATION_SERVICES, 
  TEST_PREPARATION_COURSES, 
  LANGUAGE_COURSES 
} from '@/lib/config';
import { trackConversion } from '@/lib/analytics';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();

  // Close mobile drawer and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpandedSection(null);
  }, [pathname]);

  const handlePhoneClick = () => {
    trackConversion('Phone Click', { source: 'Header' });
  };

  const handleCtaClick = () => {
    trackConversion('CTA Click', { label: 'Free Profile Assessment', source: 'Header' });
  };

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection(prev => prev === section ? null : section);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200 shadow-sm">
      
      {/* 1. TOP ANNOUNCEMENT & CONTACT BAR */}
      <div className="bg-gradient-to-r from-red-50 via-white to-red-50 text-slate-700 text-xs py-2 px-4 border-b border-red-100/80">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Prominent New Centre Announcement */}
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-red text-white text-[11px] font-bold tracking-wide uppercase shadow-xs">
              <Sparkles className="w-3 h-3 text-brand-gold animate-pulse" />
              New Centre
            </span>
            <span className="text-slate-900 font-semibold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
              SCO 31, Opp. Punjabi University, Patiala
            </span>
            <span className="hidden lg:inline text-slate-400">|</span>
            <span className="hidden lg:inline text-slate-600">
              Study Abroad • Immigration • IELTS/PTE • French/German
            </span>
          </div>

          {/* Quick Contact & Hours */}
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:flex items-center gap-1.5 text-slate-600">
              <Clock className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
              Mon - Sat: 9:30 AM - 6:30 PM
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <a 
              href={`tel:${SITE_CONFIG.phoneRaw}`} 
              onClick={handlePhoneClick}
              className="flex items-center gap-1.5 font-bold text-slate-900 hover:text-brand-red transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-red" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. MAIN HEADER NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* AKME Official Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group py-1" aria-label="AKME Immigrations & Education Home">
            <div className="relative h-14 w-48 sm:w-56 transition-transform group-hover:scale-[1.02]">
              <Image 
                src="/images/akme-logo.png" 
                alt="AKME Immigrations & Education Logo" 
                fill
                priority
                sizes="(max-width: 768px) 190px, 230px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Mega-Menu Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 text-sm font-semibold text-slate-700">
            
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
              About
            </Link>

            {/* 1. STUDY ABROAD DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('study-abroad')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button 
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  pathname.startsWith('/countries') || pathname === '/study-abroad'
                    ? 'text-brand-red bg-red-50/70 font-bold' 
                    : 'hover:text-brand-red hover:bg-slate-50'
                }`}
                aria-expanded={openDropdown === 'study-abroad'}
              >
                <span>Study Abroad</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'study-abroad' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'study-abroad' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3.5 z-50 animate-dropdown-box">
                  <div className="px-3 py-1.5 mb-2 flex items-center justify-between border-b border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Top Study Hubs</span>
                    <Link href="/study-abroad" className="text-xs font-bold text-brand-red hover:underline">All Hubs →</Link>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {STUDY_ABROAD_COUNTRIES.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/countries/${c.slug}`}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-transparent hover:border-red-100 hover:bg-red-50/70 hover:shadow-xs transition-all group duration-150"
                      >
                        <span className="text-lg flex-shrink-0 group-hover:scale-110 transition-transform">{c.flag}</span>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-brand-red transition-colors">{c.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. IMMIGRATION DROPDOWN (BOX TYPE ANIMATED) */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('immigration')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button 
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  pathname.startsWith('/immigration') || pathname === '/visitor-visa'
                    ? 'text-brand-red bg-red-50/70 font-bold' 
                    : 'hover:text-brand-red hover:bg-slate-50'
                }`}
                aria-expanded={openDropdown === 'immigration'}
              >
                <span>Immigration</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'immigration' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'immigration' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3.5 z-50 animate-dropdown-box">
                  <div className="px-3 py-1.5 mb-2 flex items-center justify-between border-b border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Immigration Services</span>
                    <Link href="/immigration" className="text-xs font-bold text-brand-red hover:underline">Overview →</Link>
                  </div>
                  <div className="space-y-1">
                    {[
                      { title: "Permanent Residency (PR)", href: "/immigration/pr", badge: "Direct PR" },
                      { title: "Provincial Nominee Programs (PNP)", href: "/immigration/pnp", badge: "Provincial" },
                      { title: "Visitor & Tourist Visa", href: "/visitor-visa", badge: "Tourism" },
                      { title: "Australia Immigration", href: "/immigration/australia", badge: "Points Test" },
                      { title: "Canada Immigration", href: "/immigration/canada", badge: "Express Entry" },
                      { title: "Visa Refusal Case Assessment", href: "/immigration/refused-cases", badge: "Analysis" },
                    ].map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center justify-between px-3 py-2 rounded-xl border border-transparent hover:border-red-100 hover:bg-red-50/70 hover:shadow-xs transition-all group duration-150"
                      >
                        <span className="text-xs font-semibold text-slate-800 group-hover:text-brand-red transition-colors">{s.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. TEST PREPARATION DROPDOWN (BOX TYPE ANIMATED) */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('test-prep')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button 
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  pathname === '/ielts' || pathname === '/pte' || pathname.startsWith('/test-preparation')
                    ? 'text-brand-red bg-red-50/70 font-bold' 
                    : 'hover:text-brand-red hover:bg-slate-50'
                }`}
                aria-expanded={openDropdown === 'test-prep'}
              >
                <span>Test Preparation</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'test-prep' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'test-prep' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3.5 z-50 animate-dropdown-box">
                  <div className="px-3 py-1.5 mb-2 flex items-center justify-between border-b border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Test Preparation</span>
                    <Link href="/test-preparation" className="text-xs font-bold text-brand-red hover:underline">All Tests →</Link>
                  </div>
                  <div className="space-y-1">
                    {[
                      { title: "IELTS Coaching", href: "/ielts", badge: "IDP Certified" },
                      { title: "PTE Academic Prep", href: "/pte", badge: "AI Lab" },
                      { title: "CELPIP Training", href: "/test-preparation/celpip", badge: "Canada PR" },
                      { title: "CAEL Preparation", href: "/test-preparation/cael", badge: "Academic" },
                      { title: "GRE Coaching", href: "/test-preparation/gre", badge: "Grad School" },
                      { title: "Duolingo English Test (DET)", href: "/test-preparation/duolingo", badge: "Fast Results" },
                    ].map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        className="flex items-center justify-between px-3 py-2 rounded-xl border border-transparent hover:border-red-100 hover:bg-red-50/70 hover:shadow-xs transition-all group duration-150"
                      >
                        <span className="text-xs font-semibold text-slate-800 group-hover:text-brand-red transition-colors">{t.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. LANGUAGES DROPDOWN (BOX TYPE ANIMATED WITH LEVEL PILLS) */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('languages')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button 
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  pathname.startsWith('/languages') || pathname === '/language-courses'
                    ? 'text-brand-red bg-red-50/70 font-bold' 
                    : 'hover:text-brand-red hover:bg-slate-50'
                }`}
                aria-expanded={openDropdown === 'languages'}
              >
                <span>Languages</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'languages' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'languages' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3.5 z-50 animate-dropdown-box">
                  <div className="px-3 py-1.5 mb-2 flex items-center justify-between border-b border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Languages</span>
                    <Link href="/languages" className="text-xs font-bold text-brand-red hover:underline">All Courses →</Link>
                  </div>
                  <div className="space-y-1">
                    {[
                      { 
                        title: "French Language Training", 
                        href: "/languages/french", 
                        pills: ["A1", "A2", "B1", "B2"] 
                      },
                      { 
                        title: "German Language Training", 
                        href: "/languages/german", 
                        pills: ["A1", "A2", "B1", "B2"] 
                      },
                      { 
                        title: "Spoken English & Personality", 
                        href: "/languages/spoken-english", 
                        pills: ["Basic", "Advanced"] 
                      },
                    ].map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="flex flex-col gap-1.5 px-3 py-2.5 rounded-xl border border-transparent hover:border-red-100 hover:bg-red-50/70 hover:shadow-xs transition-all group duration-150"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                            {l.title}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all" />
                        </div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {l.pills.map((pill) => (
                            <span 
                              key={pill} 
                              className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700 group-hover:bg-red-100/80 group-hover:text-brand-red transition-colors"
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/contact" 
              className={`px-3 py-2 rounded-lg transition-colors ${pathname === '/contact' ? 'text-brand-red bg-red-50/70 font-bold' : 'hover:text-brand-red hover:bg-slate-50'}`}
            >
              Contact
            </Link>

          </nav>

          {/* Desktop Right CTA Action Button (Cleanly Aligned) */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/profile-assessment"
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 xl:px-6 xl:py-3 text-sm font-bold text-white bg-brand-red hover:bg-brand-redDark rounded-xl shadow-md hover:shadow-lg transition-all whitespace-nowrap"
            >
              <span>Profile Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Right Buttons & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              onClick={handlePhoneClick}
              className="p-2 text-slate-700 hover:text-brand-red hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Call AKME"
            >
              <Phone className="w-5 h-5 text-brand-red" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-brand-red" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. MOBILE STRUCTURED ACCORDION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-8 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl">
          
          {/* Prominent Mobile Announcement */}
          <div className="p-3 bg-red-50 rounded-2xl border border-red-100 flex items-start gap-2.5 text-xs text-slate-800">
            <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
            <div>
              <strong className="block text-slate-900">New Centre in Patiala:</strong>
              <span>SCO 31, Opp. Punjab &amp; Sind Bank, Walia Enclave, Opp. Punjabi University, Patiala</span>
            </div>
          </div>

          <div className="flex flex-col space-y-1 font-semibold text-slate-700 text-sm">
            <Link href="/" className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
              About AKME
            </Link>

            {/* Mobile Accordion 1: Study Abroad */}
            <div className="border border-slate-100 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => toggleMobileSection('study-abroad')}
                className="w-full flex items-center justify-between px-3 py-3 bg-slate-50/60 text-slate-900 font-bold text-left"
              >
                <span className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-brand-red" />
                  Study Abroad Destinations
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'study-abroad' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedSection === 'study-abroad' && (
                <div className="p-2 space-y-1 bg-white">
                  {STUDY_ABROAD_COUNTRIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/countries/${c.slug}`}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs hover:bg-slate-50 text-slate-700 font-medium"
                    >
                      <span>{c.flag} {c.name}</span>
                      <span className="text-[10px] text-brand-red font-bold">Explore →</span>
                    </Link>
                  ))}
                  <Link href="/study-abroad" className="block text-center text-xs font-bold text-brand-red pt-2 pb-1 hover:underline">
                    All Study Abroad Programs
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Accordion 2: Immigration */}
            <div className="border border-slate-100 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => toggleMobileSection('immigration')}
                className="w-full flex items-center justify-between px-3 py-3 bg-slate-50/60 text-slate-900 font-bold text-left"
              >
                <span className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-brand-red" />
                  Immigration Pathways
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'immigration' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedSection === 'immigration' && (
                <div className="p-2 space-y-1 bg-white">
                  {IMMIGRATION_SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={s.href}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs hover:bg-slate-50 text-slate-700 font-medium"
                    >
                      <span>{s.title}</span>
                      <span className="text-[10px] text-brand-red font-bold">{s.badge}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Accordion 3: Test Preparation */}
            <div className="border border-slate-100 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => toggleMobileSection('test-prep')}
                className="w-full flex items-center justify-between px-3 py-3 bg-slate-50/60 text-slate-900 font-bold text-left"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-brand-red" />
                  Test Preparation
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'test-prep' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedSection === 'test-prep' && (
                <div className="p-2 space-y-1 bg-white">
                  {TEST_PREPARATION_COURSES.map((t) => (
                    <Link
                      key={t.slug}
                      href={t.href}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs hover:bg-slate-50 text-slate-700 font-medium"
                    >
                      <span>{t.title}</span>
                      <span className="text-[10px] text-emerald-700 font-bold">{t.badge}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Accordion 4: Languages */}
            <div className="border border-slate-100 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => toggleMobileSection('languages')}
                className="w-full flex items-center justify-between px-3 py-3 bg-slate-50/60 text-slate-900 font-bold text-left"
              >
                <span className="flex items-center gap-2">
                  <Languages className="w-4 h-4 text-brand-red" />
                  Foreign Languages
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'languages' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedSection === 'languages' && (
                <div className="p-2 space-y-1 bg-white">
                  {LANGUAGE_COURSES.map((l) => (
                    <Link
                      key={l.slug}
                      href={l.href}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs hover:bg-slate-50 text-slate-700 font-medium"
                    >
                      <span>{l.title}</span>
                      <span className="text-[10px] text-brand-red font-bold">{l.levels}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
              Contact Centre
            </Link>
          </div>

          {/* Mobile Bottom CTAs */}
          <div className="pt-4 border-t border-slate-200 space-y-2">
            <Link
              href="/profile-assessment"
              onClick={handleCtaClick}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-center font-bold text-white bg-brand-red hover:bg-brand-redDark rounded-xl shadow transition-colors"
            >
              <span>Profile Assessment</span>
              <ArrowRight className="w-4 h-4" />
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
              <Link
                href="/contact"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                <MapPin className="w-4 h-4 text-brand-red" />
                Visit Centre
              </Link>
            </div>
          </div>

        </div>
      )}

    </header>
  );
}
