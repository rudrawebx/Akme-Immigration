import { 
  GraduationCap, 
  FileCheck2, 
  BookOpen, 
  Languages, 
  Award,
  CheckCircle2, 
  MapPin, 
  Compass, 
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import Link from 'next/link';

const FOUR_PILLARS = [
  {
    icon: GraduationCap,
    title: "1. Study Abroad",
    desc: "Canada, Australia, UK, Germany, France, Ireland & USA",
    href: "/study-abroad",
    badge: "Admissions & Visas",
  },
  {
    icon: FileCheck2,
    title: "2. Immigration",
    desc: "Permanent Residency (PR), PNP, Visitor Visas & Refused Cases",
    href: "/immigration",
    badge: "Legal Pathways",
  },
  {
    icon: BookOpen,
    title: "3. Test Preparation",
    desc: "IELTS, PTE Academic, CELPIP, CAEL, GRE & Duolingo",
    href: "/test-preparation",
    badge: "Computer Labs",
  },
  {
    icon: Languages,
    title: "4. Foreign Languages",
    desc: "French (A1-B2), German (A1-B2) & Spoken English Fluency",
    href: "/languages",
    badge: "Certified Batches",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-slate-200 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Strip with New Centre Callout */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red"></span>
            <span className="font-bold text-slate-900">
              Four Core Pillars — All Under One Roof at AKME Patiala
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <MapPin className="w-4 h-4 text-brand-red flex-shrink-0" />
            <span className="font-semibold text-slate-800">Visit Us: SCO 31, Opp. Punjabi University, Patiala</span>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FOUR_PILLARS.map((point, index) => {
            const Icon = point.icon;
            return (
              <Link 
                key={index}
                href={point.href}
                className="group flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/70 hover:bg-red-50/40 border border-slate-200/80 hover:border-brand-red/30 transition-all shadow-2xs"
              >
                <div className="w-11 h-11 rounded-xl bg-white text-brand-red flex items-center justify-center flex-shrink-0 border border-slate-200 group-hover:bg-brand-red group-hover:text-white transition-colors shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red block mb-0.5">
                    {point.badge}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand-red transition-colors">
                    {point.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug line-clamp-2">
                    {point.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
