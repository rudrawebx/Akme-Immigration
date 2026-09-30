'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';
import { trackConversion } from '@/lib/analytics';

export default function FloatingContact() {
  const handlePhoneClick = () => {
    trackConversion('Phone Click', { source: 'Floating Widget' });
  };

  const handleWhatsAppClick = () => {
    trackConversion('WhatsApp Click', { source: 'Floating Widget' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="w-13 h-13 p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp with AKME Counsellor"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>

      {/* Direct Phone Call Button */}
      <a
        href={`tel:${SITE_CONFIG.phoneRaw}`}
        onClick={handlePhoneClick}
        className="w-13 h-13 p-3.5 bg-brand-red hover:bg-brand-redDark text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-red-300 sm:hidden"
        aria-label="Call AKME Office"
        title="Call AKME Office"
      >
        <Phone className="w-5 h-5 fill-white text-brand-red" />
        <span className="sr-only">Call AKME</span>
      </a>
    </div>
  );
}
