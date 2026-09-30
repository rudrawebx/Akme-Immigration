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
  Maximize2
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
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200">
      
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-brand-red text-xs font-bold shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span>Premier Overseas Consultancy & Language Academy in Patiala</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-heading">
              Your Trusted Partner for <span className="text-brand-red">Global Education</span> & Career Pathways
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Expert guidance for study visas, visitor visas, and certified language preparation. Transparent eligibility assessments with zero false claims.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={switchToForm}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-brand-red hover:bg-brand-redDark shadow-md hover:shadow-lg transition-all"
              >
                <span>Free Profile Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 shadow-sm transition-colors"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-600 text-white" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-base font-bold text-slate-800 hover:text-brand-red bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Verified Counsellors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100% Document Support</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Transparent Fee Policy</span>
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
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
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
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-brand-red" />
                  <span>Check Eligibility</span>
                </button>
              </div>

              {/* Tab Content 1: Video Player */}
              {activeTab === 'video' && (
                <div className="p-4 sm:p-6 space-y-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-video bg-slate-900">
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
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-md flex items-center gap-2 border border-slate-200/60 pointer-events-none">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Global Campus Life</span>
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
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Experience Global Student Life</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Top universities in Canada, UK, Australia & Europe.</p>
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
                    title="Check Your Eligibility" 
                    subtitle="Get a personalized review of your academic & financial profile within 24 hours."
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
