import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  Heart 
} from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import { profileData } from '../data/profileData';

export default function Footer({ onOpenExecutiveBrief, onOpenContact }) {
  const { personal, targetRoles } = profileData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Tier */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-900">
          
          <div className="space-y-2 text-center lg:text-left">
            <div className="text-xl font-extrabold text-white flex items-center justify-center lg:justify-start gap-2">
              <span>{personal.name}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-500/30">
                Executive Portfolio
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Senior Technology Leader specializing in Cloud Modernization, Banking & Cards Platforms, Distributed Systems, and AI-Enabled Innovation.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenExecutiveBrief}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
            >
              Executive Brief (PDF Print)
            </button>
            <button
              onClick={onOpenContact}
              className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-colors cursor-pointer"
            >
              Connect with Kamal
            </button>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Kamal Jeet Singh. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Pune, Maharashtra, India</span>
            <span>•</span>
            <a href={`mailto:${personal.email}`} className="hover:text-slate-300 transition-colors">
              {personal.email}
            </a>
            <span>•</span>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}