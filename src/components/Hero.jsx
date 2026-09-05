import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  Calendar, 
  MapPin, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Cpu, 
  Building2 
} from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import profilePhoto from '../assets/profile.jpg';
import { profileData } from '../data/profileData';

export default function Hero({ onOpenExecutiveBrief, onOpenContact }) {
  const { personal, targetRoles, executiveSummary } = profileData;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % targetRoles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [targetRoles.length]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Executive Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs font-medium tracking-wide shadow-sm shadow-amber-500/10">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Available for Executive Roles:</span>
              <span className="font-semibold text-white transition-all duration-300">
                {targetRoles[roleIndex]}
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                {personal.name}
              </h1>
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-sky-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
                {personal.title}
              </div>
            </div>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Building2 size={15} className="text-sky-400" />
                <span>Barclays US Cards Tech Leader</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={15} className="text-emerald-400" />
                <span>{personal.location}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-amber-400" />
                <span>20+ Years Tier-1 Banking & Cloud Experience</span>
              </span>
            </div>

            {/* Executive Narrative */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal pt-1">
              {executiveSummary}
            </p>

            {/* Value Proposition Highlights Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">£15M+</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Annual Value Created</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-sky-400">50+</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Global Engineers Led</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-400">£8M+</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Portfolio Ownership</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-indigo-400">-15%</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Core Latency Reduced</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenContact}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-sm"
              >
                <Calendar size={18} />
                <span>Schedule Executive Discussion</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onOpenExecutiveBrief}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-sky-500/50 shadow-md transition-all cursor-pointer text-sm group"
              >
                <FileText size={18} className="text-sky-400 group-hover:scale-110 transition-transform" />
                <span>View Executive One-Pager</span>
              </button>
            </div>

          </div>

          {/* Right Column: Executive Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Decorative background border gradient frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-500 via-amber-500 to-indigo-600 rounded-3xl blur-md opacity-40 group-hover:opacity-80 transition duration-1000"></div>

              <div className="relative bg-slate-900/90 rounded-2xl border border-slate-700/80 p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
                
                {/* Photo container */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-950 shadow-inner">
                  <img
                    src={profilePhoto || personal.photo}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient overlay at bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Badges on the image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700">
                      <Cpu size={14} className="text-sky-400" />
                      <span className="font-medium">AWS & Agentic AI</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/80 backdrop-blur-md border border-emerald-600/40 text-emerald-300">
                      <TrendingUp size={14} />
                      <span className="font-semibold">£15M+ ROI</span>
                    </div>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>Kamal Jeet Singh</span>
                      <CheckCircle2 size={16} className="text-sky-400 inline" />
                    </div>
                    <div className="text-xs text-slate-400">VP / Technology Leader</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${personal.email}`}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      title="Send Email"
                    >
                      <Mail size={16} />
                    </a>
                    <a
                      href={`tel:${personal.phone}`}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      title="Call"
                    >
                      <Phone size={16} />
                    </a>
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-sky-950 hover:bg-sky-900 border border-sky-600/40 text-sky-300 transition-colors"
                      title="LinkedIn Profile"
                    >
                      <LinkedinIcon size={16} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}