'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  Play, 
  FileText, 
  Volume2, 
  VolumeX,
  MapPin,
  GraduationCap,
  FileCheck2,
  BookOpen,
  Languages
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';
import AssessmentForm from '@/components/AssessmentForm';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<'video' | 'form'>('video');
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const switchToForm = () => {
    setActiveTab('form');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 pt-8 pb-14 lg:pt-12 lg:pb-18 border-b border-slate-200">
      
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Prominent New Centre Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-brand-red text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
              <span>New Centre: Opposite Punjabi University, Patiala</span>
            </div>

            {/* Primary Brand & Positioning Headlines */}
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
                AKME Immigrations & Education
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-heading">
                Patiala's Trusted <span className="text-brand-red">Immigration & Education</span> Institute
              </h1>
            </div>

            {/* Supporting Headline & 4 Core Pillars Strip */}
            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
              Study Abroad, Immigration, Test Preparation & Foreign Language Training — All Under One Roof. Transparent, profile-based counselling with zero false commitments.
            </p>

            {/* 4 Pillars Highlight Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                <GraduationCap className="w-4 h-4 text-brand-red mx-auto mb-1" />
                <span className="text-xs font-bold text-slate-900 block leading-tight">Study Abroad</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                <FileCheck2 className="w-4 h-4 text-brand-red mx-auto mb-1" />
                <span className="text-xs font-bold text-slate-900 block leading-tight">Immigration</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                <BookOpen className="w-4 h-4 text-brand-red mx-auto mb-1" />
                <span className="text-xs font-bold text-slate-900 block leading-tight">IELTS / PTE</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                <Languages className="w-4 h-4 text-brand-red mx-auto mb-1" />
                <span className="text-xs font-bold text-slate-900 block leading-tight">French / German</span>
              </div>
            </div>

            {/* Action Buttons: Primary, Secondary, Additional */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={switchToForm}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-red hover:bg-brand-redDark shadow-md hover:shadow-lg transition-all"
              >
                <span>Get Free Profile Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-slate-800 hover:text-brand-red bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-colors"
              >
                <MapPin className="w-4 h-4 text-brand-red" />
                <span>Visit Our Centre</span>
              </Link>

              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-500" />
                <span>Talk to an Expert</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Opposite Punjabi University</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Profile-Based Guidance</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Transparent Process</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Video Showcase & Assessment Form Tabs */}
          <div className="lg:col-span-6" id="assessment">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              
              {/* Tab Selector Header */}
              <div className="flex items-center border-b border-slate-200 bg-slate-50/80 p-2 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('video')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === 'video'
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <Play className="w-3.5 h-3.5 fill-brand-red text-brand-red" />
                  <span>Campus Life Video</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('form')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === 'form'
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-brand-red" />
                  <span>Free Assessment Form</span>
                </button>
              </div>

              {/* Tab Content 1: Video Player */}
              {activeTab === 'video' && (
                <div className="p-4 sm:p-5 space-y-3">
                  <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-video bg-slate-900">
                    <video
                      ref={videoRef}
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      controls
                      poster="/images/hero-video-poster.png"
                      className="w-full h-full object-cover"
                    >
                      <source src="/videos/hero-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Floating Overlay Badge */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-xs flex items-center gap-2 border border-slate-200/60 pointer-events-none">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Study Abroad & Campus Life</span>
                    </div>

                    {/* Quick Sound Toggle Button */}
                    <button
                      type="button"
                      onClick={toggleSound}
                      className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-colors text-xs flex items-center gap-1.5"
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Video Caption & Quick Assessment CTA */}
                  <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Patiala to Global Universities</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5">Guidance for Canada, UK, Australia, Germany, France, USA & Ireland.</p>
                    </div>

                    <button
                      type="button"
                      onClick={switchToForm}
                      className="px-4 py-2 bg-brand-red hover:bg-brand-redDark text-white font-bold text-xs rounded-xl shadow transition-colors inline-flex items-center gap-1.5 flex-shrink-0"
                    >
                      <span>Check Eligibility</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Tab Content 2: Assessment Form */}
              {activeTab === 'form' && (
                <div className="p-2 sm:p-4">
                  <AssessmentForm 
                    compact 
                    title="Get Free Profile Assessment" 
                    subtitle="Share your profile details for an honest evaluation from senior counsellors in Patiala."
                  />
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
