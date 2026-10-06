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
              Opposite Punjabi University, Patiala
            </span>
            <span className="hidden lg:inline text-slate-400">|</span>
            <span className="hidden lg:inline text-slate-600">
              Study Abroad • Immigration • IELTS/PTE • French/German
            </span>
          </div>

          {/* Quick Help & Payment Links */}
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
            <span className="text-slate-300">|</span>
            <Link 
              href="/payment" 
              className="flex items-center gap-1.5 font-bold text-amber-800 hover:text-amber-900 transition-colors bg-amber-50 hover:bg-amber-100 px-2.5 py-0.5 rounded-md border border-amber-200"
            >
              <CreditCard className="w-3.5 h-3.5 text-amber-600" />
              <span>Make a Payment</span>
            </Link>
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
                <div className="absolute top-full -left-10 w-[540px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-brand-red" />
                      Popular Study Destinations
                    </span>
                    <Link href="/study-abroad" className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1">
                      <span>Study Abroad Hub</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {STUDY_ABROAD_COUNTRIES.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/countries/${c.slug}`}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-200/60"
                      >
                        <span className="text-2xl flex-shrink-0">{c.flag}</span>
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                            {c.name}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {c.tagline}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between bg-slate-50 p-2.5 rounded-xl">
                    <span className="text-xs text-slate-600 font-medium">Looking for course shortlisting or intake guidelines?</span>
                    <Link href="/profile-assessment" className="text-xs font-bold text-white bg-brand-red hover:bg-brand-redDark px-3 py-1.5 rounded-lg">
                      Free Assessment →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 2. IMMIGRATION DROPDOWN */}
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
                <div className="absolute top-full -left-20 w-[480px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <FileCheck2 className="w-4 h-4 text-brand-red" />
                      Immigration & Visa Pathways
                    </span>
                    <Link href="/immigration" className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1">
                      <span>View All Pathways</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {IMMIGRATION_SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={s.href}
                        className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-200/60 block"
                      >
                        <div className="text-xs font-bold uppercase tracking-wider text-brand-red mb-0.5">
                          {s.badge}
                        </div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                          {s.title}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {s.shortDesc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. TEST PREPARATION DROPDOWN */}
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
                <div className="absolute top-full -left-20 w-[460px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-brand-red" />
                      In-House Academy & Labs
                    </span>
                    <Link href="/test-preparation" className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1">
                      <span>All Tests</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {TEST_PREPARATION_COURSES.map((t) => (
                      <Link
                        key={t.slug}
                        href={t.href}
                        className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-200/60 block"
                      >
                        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-0.5">
                          {t.badge}
                        </div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                          {t.title}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {t.shortDesc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. LANGUAGES DROPDOWN */}
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
                <div className="absolute top-full -left-10 w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Languages className="w-4 h-4 text-brand-red" />
                      Foreign Language Batches
                    </span>
                    <Link href="/languages" className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1">
                      <span>View Courses</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="space-y-2">
                    {LANGUAGE_COURSES.map((l) => (
                      <Link
                        key={l.slug}
                        href={l.href}
                        className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-200/60 block"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                            {l.title}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red bg-red-50 px-2 py-0.5 rounded-full">
                            {l.levels}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 mt-1">
                          {l.shortDesc}
                        </div>
                      </Link>
                    ))}
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
              Visa Updates
            </Link>

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
              <span>Free Profile Assessment</span>
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

            <Link href="/success-stories" className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
              Success Stories
            </Link>
            <Link href="/blog" className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
              Visa Updates
            </Link>
            <Link href="/contact" className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
              Contact Centre
            </Link>
            <Link href="/payment" className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors text-amber-800 font-semibold flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-amber-600" />
              Make a Payment
            </Link>
          </div>

          {/* Mobile Bottom CTAs */}
          <div className="pt-4 border-t border-slate-200 space-y-2">
            <Link
              href="/profile-assessment"
              onClick={handleCtaClick}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-center font-bold text-white bg-brand-red hover:bg-brand-redDark rounded-xl shadow transition-colors"
            >
              <span>Get Free Profile Assessment</span>
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
