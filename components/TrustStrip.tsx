import { ShieldCheck, UserCheck, FileText, Compass, Award, Clock } from 'lucide-react';

const TRUST_POINTS = [
  {
    icon: UserCheck,
    title: "Personalized Counselling",
    desc: "One-on-one profile evaluation based on your academic background and financial preferences.",
  },
  {
    icon: FileText,
    title: "100% Documentation Support",
    desc: "Thorough verification of transcripts, financial papers, SOPs, and recommendation letters.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent & Ethical",
    desc: "No false commitments or hidden fee charges. Direct student-to-university fee transfers.",
  },
  {
    icon: Compass,
    title: "Pre-Departure & Visa Briefing",
    desc: "Mock visa interviews, accommodation guidance, and flight arrival assistance.",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-slate-200 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center flex-shrink-0 border border-red-100">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {point.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
