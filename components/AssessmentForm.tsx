'use client';

import { useState } from 'react';
import { 
  CheckCircle2, 
  Send, 
  Phone, 
  MessageCircle, 
  AlertCircle, 
  Loader2, 
  Sparkles 
} from 'lucide-react';
import { SITE_CONFIG, COUNTRIES_LIST, SERVICES_LIST } from '@/lib/config';
import { getStoredUtmParameters, trackConversion } from '@/lib/analytics';

interface AssessmentFormProps {
  defaultCountry?: string;
  defaultService?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
  hideHeader?: boolean;
}

export default function AssessmentForm({
  defaultCountry = '',
  defaultService = '',
  title = "Profile Assessment",
  subtitle = "Find out your eligibility for Study Visa, Immigration / PR, or Foreign Language Training.",
  compact = false,
  hideHeader = false,
}: AssessmentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    city: '',
    qualification: '',
    course: '',
    experience: '',
    ieltsScore: '',
    pteScore: '',
    country: defaultCountry || 'Canada',
    service: defaultService || 'Study Visa',
    budget: '',
    message: '',
    // Spam protection honeypot
    website_url_hp: '',
  });

  const [loading, setLoading] = useState(false);
  const [successLeadId, setSuccessLeadId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage('Please fill in your name, phone number, and email.');
      return;
    }

    // Phone validation
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please provide a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);
    trackConversion('Form Start', { form: 'Profile Assessment' });

    try {
      const utm = getStoredUtmParameters();
      const payload = {
        ...formData,
        ...utm,
        landingPage: typeof window !== 'undefined' ? window.location.pathname : '',
        referrer: typeof window !== 'undefined' ? document.referrer : '',
      };

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit inquiry. Please try again.');
      }

      setSuccessLeadId(data.leadId);
      trackConversion('Form Submit', {
        leadId: data.leadId,
        country: formData.country,
        service: formData.service,
      });
      trackConversion('Profile Assessment', {
        leadId: data.leadId,
        country: formData.country,
      });

    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred. Please call or WhatsApp us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (successLeadId) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-emerald-200 shadow-xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
            Inquiry Submitted Successfully
          </span>
          <h3 className="text-2xl font-bold text-slate-900">
            Thank You, {formData.name}!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Your profile details have been received. An AKME certified visa advisor has been notified to analyze your eligibility.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto">
          <span className="text-xs uppercase text-slate-400 font-semibold block">Your Reference Lead ID</span>
          <span className="text-lg font-mono font-bold text-brand-red">{successLeadId}</span>
        </div>

        <div className="space-y-3 pt-2 max-w-md mx-auto">
          <p className="text-xs text-slate-500 font-medium">
            Need faster priority evaluation? Contact us directly quoting your Lead ID:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20AKME%20Immigrations,%20my%20Lead%20ID%20is%20${successLeadId}.%20I%20just%20submitted%20my%20profile%20assessment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              Call Now
            </a>
          </div>
        </div>

        <button
          onClick={() => {
            setSuccessLeadId(null);
            setFormData({
              name: '',
              phone: '',
              email: '',
              age: '',
              city: '',
              qualification: '',
              course: '',
              experience: '',
              ieltsScore: '',
              pteScore: '',
              country: defaultCountry || 'Canada',
              service: defaultService || 'Study Visa',
              budget: '',
              message: '',
              website_url_hp: '',
            });
          }}
          className="text-xs text-slate-400 hover:text-slate-600 underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl ${hideHeader ? 'border-0 shadow-none p-0' : `border border-slate-200 shadow-xl ${compact ? 'p-6' : 'p-6 sm:p-8 lg:p-10'}`}`}>
      {!hideHeader && (
        <div className="mb-6">
          <div className="flex items-center gap-2 text-brand-red font-semibold text-xs tracking-wider uppercase mb-1">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>Quick & Confidential Eligibility Check</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{title}</h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">{subtitle}</p>
        </div>
      )}

      {errorMessage && (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs sm:text-sm text-red-700 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Anti-spam honeypot - hidden from real users */}
        <input 
          type="text" 
          name="website_url_hp" 
          value={formData.website_url_hp} 
          onChange={handleChange} 
          tabIndex={-1} 
          autoComplete="off" 
          style={{ display: 'none' }} 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Gurpreet Singh"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Mobile Number (WhatsApp) <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98155 12980"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Your City / Location
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Patiala, Mohali, Ludhiana"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Preferred Country <span className="text-red-500">*</span>
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white transition-all"
            >
              {COUNTRIES_LIST.map((c) => (
                <option key={c.slug} value={c.name}>{c.name}</option>
              ))}
              <option value="Other">Other Country</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Service Interested In <span className="text-red-500">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white transition-all"
            >
              {SERVICES_LIST.map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
            </select>
          </div>
        </div>

        {!compact && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Highest Qualification
                </label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white transition-all"
                >
                  <option value="">Select Qualification</option>
                  <option value="12th / Senior Secondary">12th / Senior Secondary</option>
                  <option value="Diploma">Polytechnic / Diploma</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="PhD / Doctorate">PhD / Doctorate</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  IELTS / English Score
                </label>
                <select
                  name="ieltsScore"
                  value={formData.ieltsScore}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white transition-all"
                >
                  <option value="">Status / Score</option>
                  <option value="Not Yet Appeared">Not Yet Appeared</option>
                  <option value="Booked Exam">Exam Booked</option>
                  <option value="6.0 Bands">6.0 Bands</option>
                  <option value="6.5 Bands">6.5 Bands</option>
                  <option value="7.0+ Bands">7.0+ Bands</option>
                  <option value="PTE 58-64">PTE 58 - 64</option>
                  <option value="PTE 65+">PTE 65+</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Work Experience
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white transition-all"
                >
                  <option value="Fresher / None">Fresher / None</option>
                  <option value="1-2 Years">1 - 2 Years</option>
                  <option value="3-5 Years">3 - 5 Years</option>
                  <option value="5+ Years">5+ Years</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Specific Question or Target Course (Optional)
              </label>
              <textarea
                name="message"
                rows={2}
                value={formData.message}
                onChange={handleChange}
                placeholder="Mention desired course, previous visa refusals (if any), or specific questions..."
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white transition-all resize-none"
              />
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-brand-red hover:bg-brand-redDark disabled:opacity-75 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Verifying & Submitting...</span>
            </>
          ) : (
            <>
              <span>Check Eligibility & Get Free Counselling</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-500 text-center leading-tight">
          🔒 Your contact information is strictly confidential. No spam, ever. Verified under AKME Privacy Policy.
        </p>
      </form>
    </div>
  );
}
