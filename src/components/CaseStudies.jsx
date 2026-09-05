import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  ArrowUpRight, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import { profileData } from '../data/profileData';

export default function CaseStudies() {
  const { caseStudies } = profileData;
  const [expandedId, setExpandedId] = useState(caseStudies[0].id);

  const toggleExpand = (id) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <section id="cases" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Flagship Transformations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transformation Case Studies
          </h2>
          <p className="text-slate-400 text-base">
            Deep architectural & leadership case studies demonstrating how Kamal solves critical enterprise bottlenecks, executes cloud migrations, and delivers millions in ROI.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-6">
          {caseStudies.map((study) => {
            const isExpanded = expandedId === study.id;

            return (
              <div
                key={study.id}
                className={`bg-slate-900/80 border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? 'border-sky-500/50 shadow-2xl shadow-sky-500/5 bg-slate-900/95' 
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Header Row / Summary Bar */}
                <div 
                  onClick={() => toggleExpand(study.id)}
                  className="p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-2.5 py-1 rounded-md bg-sky-950 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider">
                        {study.badge}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Building2 size={14} className="text-slate-500" />
                        <span className="font-semibold text-slate-300">{study.company}</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Calendar size={14} className="text-slate-500" />
                        <span>{study.period}</span>
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {study.title}
                    </h3>

                    <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-lg border border-emerald-500/20">
                      <TrendingUp size={14} />
                      <span>{study.impact}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex flex-wrap gap-1.5 max-w-xs justify-end">
                      {study.techStack.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-300 font-medium">
                          {tech}
                        </span>
                      ))}
                      {study.techStack.length > 4 && (
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-400 font-medium">
                          +{study.techStack.length - 4} more
                        </span>
                      )}
                    </div>

                    <button 
                      className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                      aria-label={isExpanded ? "Collapse case study" : "Expand case study"}
                    >
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-8 pt-2 sm:px-8 border-t border-slate-800/80 bg-slate-950/50 space-y-6 animate-fadeIn">
                    
                    {/* Executive Summary paragraph */}
                    <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 text-sm sm:text-base text-slate-300 leading-relaxed">
                      <span className="font-bold text-sky-300 mr-2">Overview:</span>
                      {study.summary}
                    </div>

                    {/* Challenge vs Solution vs Outcome 3-Column layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      
                      {/* Challenges */}
                      <div className="bg-slate-900/60 rounded-xl p-5 border border-red-950/50 space-y-3">
                        <div className="text-xs uppercase font-bold text-red-400 tracking-wider flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-500" />
                          <span>The Challenge</span>
                        </div>
                        <ul className="space-y-2.5">
                          {study.challenges.map((c, i) => (
                            <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                              <span className="text-red-400 font-bold">•</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Solutions & Leadership Strategy */}
                      <div className="bg-slate-900/60 rounded-xl p-5 border border-sky-950/50 space-y-3">
                        <div className="text-xs uppercase font-bold text-sky-400 tracking-wider flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-sky-500" />
                          <span>Leadership & Architecture</span>
                        </div>
                        <ul className="space-y-2.5">
                          {study.solutions.map((s, i) => (
                            <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                              <span className="text-sky-400 font-bold">•</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Measurable Business Outcomes */}
                      <div className="bg-slate-900/60 rounded-xl p-5 border border-emerald-950/50 space-y-3">
                        <div className="text-xs uppercase font-bold text-emerald-400 tracking-wider flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span>Measurable Business ROI</span>
                        </div>
                        <ul className="space-y-2.5">
                          {study.outcomes.map((o, i) => (
                            <li key={i} className="text-xs sm:text-sm text-emerald-300 font-medium flex items-start gap-2">
                              <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span>{o}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Full Tech Stack Pills */}
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <span className="text-xs text-slate-400 font-semibold mr-1 flex items-center gap-1">
                        <Cpu size={14} className="text-sky-400" />
                        <span>Core Technologies & Frameworks:</span>
                      </span>
                      {study.techStack.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-xs font-medium text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}