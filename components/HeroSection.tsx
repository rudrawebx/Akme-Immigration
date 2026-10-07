'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Volume2, 
  VolumeX,
  MapPin,
  GraduationCap,
  FileCheck2,
  BookOpen,
  Languages,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';
import AssessmentForm from '@/components/AssessmentForm';

export default function HeroSection() {
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-[84vh] sm:min-h-[80vh] lg:min-h-[76vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      
      {/* 1. FULLSCREEN BACKGROUND VIDEO */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/images/hero-video-poster.png"
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.03]"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Dual Gradient Overlay for 100% Readable Text on any screen */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60 lg:to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
      </div>

      {/* Floating Sound Toggle Button */}
      <button
        type="button"
        onClick={toggleSound}
        className="absolute bottom-5 right-5 z-20 bg-black/60 hover:bg-black/90 text-white p-2.5 rounded-full backdrop-blur-md border border-white/20 transition-all shadow-lg text-xs flex items-center gap-2 group"
        title={isMuted ? 'Turn Sound On' : 'Turn Sound Off'}
      >
        {isMuted ? <VolumeX className="w-4 h-4 text-slate-300 group-hover:text-white" /> : <Volume2 className="w-4 h-4 text-brand-gold animate-pulse" />}
        <span className="hidden sm:inline text-[11px] font-medium pr-1 text-slate-200">
          {isMuted ? 'Unmute Video' : 'Mute Video'}
        </span>
      </button>

      {/* 2. MAIN HERO CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Pillars */}
          <div className="lg:col-span-7 space-y-4 text-left">
            
            {/* Primary Brand & Positioning Headlines */}
            <div className="space-y-1.5">
              <div className="text-xs sm:text-sm font-extrabold tracking-wider text-brand-gold uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                AKME Immigrations &amp; Education
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.14] font-heading drop-shadow-sm">
                Patiala's Trusted <span className="text-brand-red">Immigration &amp; Education</span> Institute
              </h1>
            </div>

            {/* Supporting Headline */}
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed drop-shadow-sm">
              Study Abroad, Immigration, Test Preparation &amp; Foreign Language Training — All Under One Roof. Transparent, profile-based counselling with zero false commitments.
            </p>

            {/* 4 Pillars Glass Cards (Responsive Grid: 2 cols on mobile, 4 on tablet/desktop) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-0.5 max-w-2xl">
              <div className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 text-center transition-colors">
                <GraduationCap className="w-4 h-4 text-brand-gold mx-auto mb-1" />
                <span className="text-xs font-bold text-white block leading-tight">Study Abroad</span>
                <span className="text-[10px] text-slate-300 hidden sm:block mt-0.5">8 Global Hubs</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 text-center transition-colors">
                <FileCheck2 className="w-4 h-4 text-brand-gold mx-auto mb-1" />
                <span className="text-xs font-bold text-white block leading-tight">Immigration</span>
                <span className="text-[10px] text-slate-300 hidden sm:block mt-0.5">PR, PNP &amp; Visitor</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 text-center transition-colors">
                <BookOpen className="w-4 h-4 text-brand-gold mx-auto mb-1" />
                <span className="text-xs font-bold text-white block leading-tight">IELTS / PTE</span>
                <span className="text-[10px] text-slate-300 hidden sm:block mt-0.5">Lab Coaching</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 text-center transition-colors">
                <Languages className="w-4 h-4 text-brand-gold mx-auto mb-1" />
                <span className="text-xs font-bold text-white block leading-tight">French / German</span>
                <span className="text-[10px] text-slate-300 hidden sm:block mt-0.5">A1-B2 &amp; Spoken</span>
              </div>
            </div>

            {/* Action Buttons: Primary, Secondary, Additional */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
              <Link
                href="/profile-assessment"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-red hover:bg-brand-redDark shadow-xl hover:shadow-red-900/40 transition-all text-center"
              >
                <span>Profile Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 shadow-md transition-colors text-center"
              >
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>Visit Our Centre</span>
              </Link>

              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>Talk to an Expert</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Opposite Punjabi University</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Profile-Based Guidance</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Transparent Process</span>
              </div>
            </div>

          </div>

          {/* Right Column: Instant Assessment Glass Card */}
          <div className="lg:col-span-5" id="assessment">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-5 sm:p-7 shadow-2xl border border-white/40 text-slate-900">
              <div className="mb-4 pb-3 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-red block">Free Evaluation</span>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900">Instant Profile Assessment</h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200/60 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Fast Review
                </span>
              </div>
              <AssessmentForm 
                compact 
                hideHeader 
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
