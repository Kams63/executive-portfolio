import React from 'react';
import { 
  TrendingUp, 
  Wallet, 
  Users, 
  Zap, 
  Cloud, 
  Gauge, 
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';
import { profileData } from '../data/profileData';

const iconMap = {
  emerald: TrendingUp,
  blue: Wallet,
  amber: Users,
  cyan: Zap,
  indigo: Cloud,
  purple: Gauge
};

const borderColors = {
  emerald: 'hover:border-emerald-500/50 group-hover:text-emerald-400',
  blue: 'hover:border-sky-500/50 group-hover:text-sky-400',
  amber: 'hover:border-amber-500/50 group-hover:text-amber-400',
  cyan: 'hover:border-cyan-500/50 group-hover:text-cyan-400',
  indigo: 'hover:border-indigo-500/50 group-hover:text-indigo-400',
  purple: 'hover:border-purple-500/50 group-hover:text-purple-400'
};

const bgAccents = {
  emerald: 'from-emerald-500/10 to-transparent',
  blue: 'from-sky-500/10 to-transparent',
  amber: 'from-amber-500/10 to-transparent',
  cyan: 'from-cyan-500/10 to-transparent',
  indigo: 'from-indigo-500/10 to-transparent',
  purple: 'from-purple-500/10 to-transparent'
};

const textAccents = {
  emerald: 'text-emerald-400',
  blue: 'text-sky-400',
  amber: 'text-amber-400',
  cyan: 'text-cyan-400',
  indigo: 'text-indigo-400',
  purple: 'text-purple-400'
};

export default function MetricsGrid() {
  const { keyMetrics } = profileData;

  return (
    <section id="metrics" className="py-20 relative bg-slate-950/60 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            Quantifiable Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Leadership Value Proposition
          </h2>
          <p className="text-slate-400 text-base">
            Proven executive track record delivering measurable ROI, operational cost reductions, and low-latency system scalability across regulated banking platforms.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyMetrics.map((metric, idx) => {
            const Icon = iconMap[metric.accent] || TrendingUp;
            return (
              <div
                key={idx}
                className={`relative group bg-slate-900/60 border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-gradient-to-br ${bgAccents[metric.accent]} ${borderColors[metric.accent]}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 ${textAccents[metric.accent]}`}>
                    <Icon size={22} />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-slate-400">
                    {metric.trend}
                  </span>
                </div>

                <div className={`text-3xl sm:text-4xl font-black mb-1.5 tracking-tight ${textAccents[metric.accent]}`}>
                  {metric.value}
                </div>

                <h3 className="text-base font-bold text-white mb-1.5">
                  {metric.label}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {metric.subtext}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}