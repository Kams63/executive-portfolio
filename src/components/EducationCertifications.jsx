import React from 'react';
import { 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  Cloud, 
  Code, 
  CheckCircle2, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { profileData } from '../data/profileData';

const certIcons = {
  ShieldCheck: ShieldCheck,
  Cloud: Cloud,
  Award: Award,
  Code: Code
};

export default function EducationCertifications() {
  const { education, certifications } = profileData;

  return (
    <section id="credentials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Award size={14} />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-slate-400 text-base">
            Executive data science training, engineering foundation, and continuous professional mastery in agile leadership and cloud systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-sky-950 border border-sky-500/30 text-sky-400">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Higher Education</h3>
                <p className="text-xs text-slate-400">Advanced Analytics & Engineering</p>
              </div>
            </div>

            <div className="space-y-4">
              {education.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-slate-700 transition-all shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-amber-950/80 border border-amber-500/30 text-amber-300 text-xs font-bold">
                      {item.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      {item.year}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {item.degree}
                  </h4>

                  <div className="text-xs sm:text-sm font-semibold text-sky-400">
                    {item.institution}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    {item.highlights}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-amber-950 border border-amber-500/30 text-amber-400">
                <Award size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Certifications & Accreditations</h3>
                <p className="text-xs text-slate-400">Governance, Cloud & Leadership</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => {
                const Icon = certIcons[cert.icon] || ShieldCheck;
                return (
                  <div 
                    key={idx}
                    className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3 hover:border-sky-500/40 transition-all shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-sky-400 w-fit mb-3">
                        <Icon size={18} />
                      </div>

                      <h4 className="text-sm font-bold text-white mb-1 leading-snug">
                        {cert.name}
                      </h4>

                      <div className="text-xs text-sky-300 font-medium">
                        {cert.issuer}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                      <span>{cert.category}</span>
                      <CheckCircle2 size={13} className="text-emerald-400" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}