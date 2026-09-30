import Link from 'next/link';
import { Home, ArrowLeft, Search, HelpCircle, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 bg-red-50 text-brand-red rounded-3xl flex items-center justify-center mx-auto border border-red-100 shadow-sm">
          <HelpCircle className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase font-bold tracking-wider text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Error 404
          </span>
          <h1 className="text-3xl font-bold text-slate-900">Page Not Found</h1>
          <p className="text-sm text-slate-600">
            The overseas destination or service page you are looking for may have moved, updated, or does not exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-brand-red hover:bg-brand-redDark shadow transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
          >
            <Phone className="w-4 h-4 text-brand-red" />
            <span>Contact AKME</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-200 text-xs text-slate-400">
          Need immediate guidance? Call us at <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-brand-red font-medium hover:underline">{SITE_CONFIG.phoneDisplay}</a>
        </div>
      </div>
    </div>
  );
}
