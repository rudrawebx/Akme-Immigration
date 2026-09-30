import Link from 'next/link';
import { 
  GraduationCap, 
  FileCheck2, 
  Plane, 
  Briefcase, 
  BookOpen, 
  Languages, 
  Award,
  ArrowRight 
} from 'lucide-react';

interface ServiceCardProps {
  slug: string;
  title: string;
  shortDesc: string;
  badge?: string;
  iconName?: string;
}

const ICON_MAP: Record<string, any> = {
  GraduationCap,
  FileCheck2,
  Plane,
  Briefcase,
  BookOpen,
  Languages,
  Award,
};

export default function ServiceCard({
  slug,
  title,
  shortDesc,
  badge,
  iconName = 'GraduationCap',
}: ServiceCardProps) {
  const IconComponent = ICON_MAP[iconName] || GraduationCap;

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
      {/* Top accent badge */}
      {badge && (
        <div className="absolute top-4 right-4">
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-red-50 text-brand-red border border-red-100">
            {badge}
          </span>
        </div>
      )}

      <div>
        <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 text-brand-red group-hover:bg-brand-red group-hover:text-white flex items-center justify-center transition-colors mb-5 shadow-sm">
          <IconComponent className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors mb-2">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
          {shortDesc}
        </p>
      </div>

      <Link
        href={`/${slug}`}
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-brand-red group/link pt-3 border-t border-slate-100 transition-colors"
      >
        <span>View Details & Eligibility</span>
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
