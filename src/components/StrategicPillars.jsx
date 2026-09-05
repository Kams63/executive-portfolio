import React, { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { profileData } from '../data/profileData';

const iconMap = {
  Cpu: Cpu,
  Sparkles: Sparkles,
  TrendingUp: TrendingUp,
  Users: Users
};

export default function StrategicPillars() {
  const { leadershipPillars } = profileData;
  const [activePillar, setActivePillar] = useState(leadershipPillars[0].id);

  const selected = leadershipPillars.find(p => p.id === activePillar) || leadershipPillars[0];
  const IconComponent = iconMap[selected.icon] || Cpu;

  return (
    <section id="pillars" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            Core Leadership Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Strategic Engineering Pillars
          </h2>
          <p className="text-slate-400 text-base">
            Bridging architectural depth, enterprise governance, and business alignment to lead organizations through complex digital transformations.
          </p>
        </div>

        {/* Pillar Selection Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {leadershipPillars.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Cpu;
            const isActive = activePillar === pillar.id;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-sky-500/60 shadow-xl shadow-sky-500/10 ring-1 ring-sky-500/30'
                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl border ${
                    isActive 
                      ? 'bg-sky-500/10 border-sky-500/30 text-sky-400' 
                      : 'bg-slate-800/50 border-slate-700 text-slate-400'
                  }`}>
                    <Icon size={20} />
                  </div>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                  )}
                </div>

                <div className="text-base font-bold text-white mb-1">
                  {pillar.title}
                </div>
                <div className="text-xs text-slate-400 line-clamp-1">
                  {pillar.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detailed Showcase Card */}
        <div className="bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 text-sky-300 text-xs font-semibold">
                <IconComponent size={14} className="text-sky-400" />
                <span>{selected.subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selected.title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {selected.description}
              </p>

              <div className="pt-2">
                <a
                  href="#cases"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 group"
                >
                  <span>Explore related enterprise case studies</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Bullet Proof Points */}
            <div className="lg:col-span-6 bg-slate-950/80 rounded-2xl border border-slate-800/80 p-6 space-y-4 shadow-inner">
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2 flex items-center gap-2">
                <Zap size={14} className="text-amber-400" />
                <span>Executive Deliverables & Evidence</span>
              </div>

              {selected.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3.5 group">
                  <div className="mt-1 p-1 rounded-md bg-sky-950 border border-sky-600/30 text-sky-400 flex-shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 group-hover:text-white transition-colors leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}