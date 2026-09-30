import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Cookie Policy | AKME Immigrations & Education',
  description: 'Learn about cookie usage and web analytics tracking standards on the AKME Immigrations website.',
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="border-b border-slate-200 pb-6 space-y-2">
            <span className="text-xs uppercase font-bold text-brand-red tracking-wider">
              Website Analytics & Tracking
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 font-heading">
              Cookie Policy
            </h1>
            <p className="text-xs text-slate-400">
              Last Updated: September 2026 | {SITE_CONFIG.legalName}
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            <p>
              This Cookie Policy explains how <strong>{SITE_CONFIG.legalName}</strong> uses cookies, pixels, and tracking technologies to ensure optimal performance, analyze web traffic, and improve user navigation across our website.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your computer or mobile device when you access our web portal. They facilitate seamless page navigation, preserve user preferences (such as selected country destinations), and enable technical features like secure session authentication.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">2. Types of Cookies We Utilize</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong>Essential & Functional Cookies:</strong> Necessary for core site features, form submission validation, and security token protection.</li>
              <li><strong>Analytical & Performance Cookies:</strong> We utilize Google Analytics 4 (GA4) and Google Tag Manager (GTM) to evaluate anonymous visitor metrics, identify popular country guides, and refine user experience.</li>
              <li><strong>Marketing & Attribution Cookies:</strong> We preserve campaign parameters (UTM parameters) to recognize which informational campaigns assist candidates in finding our counselling desk.</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900 pt-2">3. Controlling Cookie Preferences</h2>
            <p>
              Most web browsers permit you to manage or delete cookies via your browser settings. You can configure your browser to block third-party cookies or alert you when a cookie is placed. Please note that disabling essential cookies may affect form submission capabilities.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">4. Updates to this Policy</h2>
            <p>
              We may revise this Cookie Policy periodically to reflect technological adjustments or regulatory modifications. Updates are published on this page with an amended effective date.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
