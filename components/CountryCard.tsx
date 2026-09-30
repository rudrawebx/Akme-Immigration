import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, GraduationCap, Briefcase } from 'lucide-react';

interface CountryCardProps {
  slug: string;
  name: string;
  code: string;
  tagline: string;
  intakes: string;
  postStudyWork: string;
  imageUrl?: string;
}

const COUNTRY_IMAGES: Record<string, string> = {
  canada: '/images/canada-skyline.jpg',
  australia: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80',
  uk: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
  usa: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80',
  germany: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
  ireland: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80',
  'new-zealand': 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
};

export default function CountryCard({
  slug,
  name,
  code,
  tagline,
  intakes,
  postStudyWork,
}: CountryCardProps) {
  const image = COUNTRY_IMAGES[slug] || 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80';

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-red/30 transition-all duration-300 flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={`Study and Live in ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <span className="text-xl font-bold text-white tracking-wide">{name}</span>
          <span className="px-2 py-0.5 bg-white/20 backdrop-blur-md text-white text-xs font-mono font-bold rounded">
            {code}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {tagline}
        </p>

        <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
            <span className="truncate"><strong>Intakes:</strong> {intakes}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
            <span className="truncate"><strong>PSW:</strong> {postStudyWork}</span>
          </div>
        </div>

        <Link
          href={`/countries/${slug}`}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-800 bg-slate-50 hover:bg-brand-red hover:text-white border border-slate-200 hover:border-brand-red transition-all group/btn"
        >
          <span>Explore Programs & Requirements</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
