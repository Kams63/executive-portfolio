import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Layers, 
  Cpu, 
  Clock, 
  Award, 
  FileText, 
  Mail, 
  Menu, 
  X, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function Navbar({ onOpenExecutiveBrief, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Impact & Metrics', href: '#metrics' },
    { name: 'Strategic Pillars', href: '#pillars' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'Tech & AI Radar', href: '#radar' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education & Certs', href: '#credentials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-black/40 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-amber-500 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-white tracking-wider text-sm">
              KS
            </div>
          </div>
          <div>
            <div className="font-bold text-white text-lg tracking-tight group-hover:text-sky-400 transition-colors">
              Kamal Jeet Singh
            </div>
            <div className="text-xs text-slate-400 font-medium tracking-wide uppercase">
              VP / Tech Leader
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenExecutiveBrief}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-sky-400 bg-sky-950/60 hover:bg-sky-900/60 border border-sky-500/30 rounded-lg transition-all shadow-sm hover:shadow-sky-500/10 cursor-pointer"
          >
            <FileText size={14} />
            <span>Executive Brief</span>
          </button>
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg transition-all shadow-md hover:shadow-amber-500/20 font-medium cursor-pointer"
          >
            <Mail size={14} />
            <span>Connect</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenExecutiveBrief}
            className="p-2 text-sky-400 bg-sky-950/50 rounded-lg border border-sky-500/30"
            title="Executive Brief"
          >
            <FileText size={18} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl backdrop-blur-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
            >
              <span>{link.name}</span>
              <ChevronRight size={16} className="text-slate-500" />
            </a>
          ))}
          <div className="pt-3 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 text-xs font-semibold text-center text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}