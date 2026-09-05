import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Briefcase, 
  ChevronRight, 
  ShieldCheck, 
  TrendingUp, 
  Layers 
} from 'lucide-react';
import { profileData } from '../data/profileData';

export default function CareerTimeline() {
  const { careerHistory } = profileData;
  const [selectedRole, setSelectedRole] = useState(0);

  return (
    <section id="experience" className="py-24 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase size={14} />
            <span>20-Year Leadership Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Executive Career Journey
          </h2>
          <p className="text-slate-400 text-base">
            From technical engineering leadership and BI architecture to driving multi-million pound cloud and digital transformations across Barclays global portfolios.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Role Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {careerHistory.map((role, idx) => {
              const isSelected = selectedRole === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedRole(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-sky-500/60 shadow-xl shadow-sky-500/10 ring-1 ring-sky-500/30'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-sky-400">
                        {role.period}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {role.type}
                      </span>
                    </div>

                    <div className="text-base font-bold text-white leading-snug">
                      {role.role}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Building2 size={13} className="text-slate-500" />
                      <span>{role.company}</span>
                      <span>•</span>
                      <MapPin size={13} className="text-slate-500" />
                      <span>{role.location}</span>
                    </div>
                  </div>

                  <ChevronRight size={18} className={`transition-transform flex-shrink-0 ${
                    isSelected ? 'text-sky-400 translate-x-1' : 'text-slate-600'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Role Deep Dive */}
          <div className="lg:col-span-7">
            {(() => {
              const active = careerHistory[selectedRole];
              return (
                <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 sticky top-28">
                  
                  {/* Top Bar */}
                  <div className="pb-5 border-b border-slate-800 space-y-2 text-left">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-lg border border-sky-500/20">
                        {active.type}
                      </div>
                      <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                        <Calendar size={14} className="text-amber-400" />
                        <span>{active.period}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-extrabold text-white">
                      {active.role}
                    </h3>

                    <div className="flex items-center gap-3 text-sm text-slate-400 font-medium">
                      <span className="text-slate-200 font-bold">{active.company}</span>
                      <span>•</span>
                      <span>{active.location}</span>
                    </div>
                  </div>

                  {/* Responsibilities & Achievements */}
                  <div className="space-y-4 text-left">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                      <ShieldCheck size={14} className="text-emerald-400" />
                      <span>Key Leadership Responsibilities & Milestones</span>
                    </div>

                    <div className="space-y-3">
                      {active.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-3 group">
                          <div className="mt-1 p-1 rounded-md bg-slate-950 border border-slate-800 text-sky-400 flex-shrink-0 group-hover:border-sky-500/40">
                            <CheckCircle2 size={14} />
                          </div>
                          <p className="text-sm sm:text-base text-slate-300 group-hover:text-white transition-colors leading-relaxed">
                            {resp}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* High-level tag banner */}
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Environment & Standards:</span>
                    <span className="font-semibold text-sky-300">
                      Tier-1 Banking | Regulated Financial Services | SAFe 6
                    </span>
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
}