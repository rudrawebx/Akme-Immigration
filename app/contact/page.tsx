import { Metadata } from 'next';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';
import AssessmentForm from '@/components/AssessmentForm';

export const metadata: Metadata = {
  title: 'Contact AKME Immigrations & Education | Patiala Office',
  description: 'Reach AKME Immigrations in Patiala, Punjab. Address: SCO 37 & 38, near Vardhman Hospital, Urban Estate Phase II. Phone: +91 98155-12980. Schedule an in-person or online consultation.',
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading">
            Contact AKME Immigrations
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Have questions about study permits, university intakes, IELTS/PTE training, or immigration? Connect with our dedicated advisory team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900 font-heading border-b border-slate-100 pb-4">
                Patiala Head Office
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Physical Address</strong>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {SITE_CONFIG.address.full}
                    </p>
                    <a
                      href={SITE_CONFIG.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-brand-red font-semibold hover:underline inline-block mt-1.5"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Telephone Helpline</strong>
                    <a
                      href={`tel:${SITE_CONFIG.phoneRaw}`}
                      className="text-base font-bold text-slate-900 hover:text-brand-red transition-colors block"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                    <span className="text-xs text-slate-500">Available during operating office hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Official Email</strong>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sm font-semibold text-slate-900 hover:text-brand-red transition-colors block"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <span className="text-xs text-slate-500">Official inquiries & document submissions</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Consulting Hours</strong>
                    <p className="text-xs sm:text-sm text-slate-600">
                      <strong>{SITE_CONFIG.hours.days}:</strong> {SITE_CONFIG.hours.time}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      <strong>Sunday:</strong> {SITE_CONFIG.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-sm overflow-hidden">
              <div className="h-64 rounded-2xl overflow-hidden relative">
                <iframe
                  title="AKME Immigrations Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4079860228393!2d76.4172!3d30.3425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028e3b1234567%3A0x123456789abcdef!2sUrban%20Estate%20Phase%20II%2C%20Patiala%2C%20Punjab!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column: Assessment & Inquiry Form */}
          <div className="lg:col-span-7">
            <AssessmentForm
              title="Schedule a Consultation or Inquiry"
              subtitle="Submit your details below and an AKME advisor will reach out to review your overseas academic or migration profile."
            />
          </div>

        </div>

      </div>
    </div>
  );
}
