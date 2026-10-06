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
  title: 'Contact AKME Immigrations & Education | Opposite Punjabi University, Patiala',
  description: 'Reach AKME Immigrations & Education in Patiala, Punjab. Location: Opposite Punjabi University, Patiala. Phone: +91 98155-12980. Schedule an in-person or online consultation for study visas, immigration, IELTS, and languages.',
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
            Visit AKME's Patiala Centre
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Have questions about study permits, university intakes, IELTS/PTE training, or immigration? Connect with our dedicated advisory team Opposite Punjabi University, Patiala.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-red">New Centre Location</span>
                <h2 className="text-xl font-bold text-slate-900 font-heading mt-0.5">
                  SCO 31, Walia Enclave, Opposite Punjabi University, Patiala
                </h2>
              </div>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Physical Address</strong>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      SCO 31, Opposite Punjab &amp; Sind Bank, Walia Enclave, Opposite Punjabi University, Patiala, Punjab, India
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
                    <strong className="block text-slate-900 font-semibold mb-0.5">Operating Hours</strong>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      {SITE_CONFIG.hours.days}: {SITE_CONFIG.hours.time}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {SITE_CONFIG.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
                  <span>Chat on WhatsApp with Patiala Office</span>
                </a>
              </div>
            </div>

            {/* In-Person Visit Notice */}
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 text-xs text-amber-900 space-y-2">
              <strong className="block text-sm font-bold text-amber-950">
                Planning an In-Person Visit?
              </strong>
              <p className="leading-relaxed">
                We encourage students to bring photocopies of their 10th, 12th, degree mark sheets, passport, and previous IELTS/PTE scorecards (if available) for on-the-spot profile evaluation.
              </p>
            </div>

          </div>

          {/* Right Column: Profile Assessment Form */}
          <div className="lg:col-span-7">
            <AssessmentForm
              title="Schedule an Assessment or Inquiry"
              subtitle="Fill in your details below and an AKME counsellor from our Patiala office will reach out within 24 working hours."
            />
          </div>

        </div>

        {/* Embedded Map Section */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Location Map — Opposite Punjabi University, Patiala
              </h3>
              <p className="text-xs text-slate-500">
                Direct road access along the university corridor in Patiala.
              </p>
            </div>
            <a
              href={SITE_CONFIG.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-red text-white text-xs font-bold rounded-xl shadow-xs hover:bg-brand-redDark transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-100">
            <iframe
              title="AKME Immigrations New Centre Opposite Punjabi University Patiala"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13778.536768340156!2d76.4385!3d30.3585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910287232e01df3%3A0xa64aa8a3424d5e9b!2sPunjabi%20University%2C%20Patiala%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}
