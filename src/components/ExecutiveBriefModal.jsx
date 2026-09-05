import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  ShieldCheck, 
  TrendingUp, 
  Cpu, 
  Layers, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import { profileData } from '../data/profileData';

export default function ExecutiveBriefModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, targetRoles, executiveSummary, keyMetrics, caseStudies, education, certifications } = profileData;
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyBio = () => {
    const bioText = `Kamal Jeet Singh - Senior Technology & Engineering Leader
Location: ${personal.location} | Email: ${personal.email} | Phone: ${personal.phone}

Executive Summary:
${executiveSummary}

Key Leadership Impact:
- £15M+ Annual Savings delivered across digital transformation and self-service.
- 50+ Global Engineers, Managers, and Architects led across US Cards & Collections platforms.
- £8M+ Technology Portfolio ownership & cloud modernization roadmap.
- 15% Latency Reduction in high-volume retail online banking processing millions of daily transactions.
- 30% Infrastructure Cost Reduction via AWS cloud-native migration.

Core Competencies:
- Banking & Cards Platforms, Cloud Modernization (AWS), Agentic AI, MCP, A2A, Microservices, DevSecOps, SAFe 6.

Education & Certifications:
- Post Graduate in Data Science & Business Analytics (Great Lakes / Texas McCombs)
- B.E. Mechanical (University of Pune)
- SAFe Agilist 6 | AWS Cloud Practitioner Essentials | Executive Leadership`;

    navigator.clipboard.writeText(bioText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Top Control Bar (Hidden in Print) */}
        <div className="no-print bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Executive 1-Pager Brief
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyBio}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Executive Bio'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-xs font-semibold text-white transition-colors cursor-pointer"
            >
              <Printer size={14} />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Executive Document Area */}
        <div className="p-6 sm:p-10 space-y-6 text-left max-h-[82vh] overflow-y-auto bg-slate-900 text-slate-200">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-black text-white">{personal.name}</h1>
                <div className="text-lg font-bold text-sky-400 mt-0.5">
                  {personal.title}
                </div>
                <div className="text-xs text-amber-300 font-medium mt-1">
                  Target: {targetRoles.join(' • ')}
                </div>
              </div>

              <div className="text-xs text-slate-300 space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin size={13} className="text-emerald-400" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail size={13} className="text-sky-400" />
                  <span>{personal.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone size={13} className="text-amber-400" />
                  <span>{personal.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase font-bold text-sky-400 tracking-wider">
              Executive Profile & Value Proposition
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {executiveSummary}
            </p>
          </div>

          {/* Quantified Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {keyMetrics.slice(0, 4).map((m, idx) => (
              <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                <div className="text-xl font-black text-amber-400">{m.value}</div>
                <div className="text-xs font-bold text-white mt-0.5">{m.label}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{m.trend}</div>
              </div>
            ))}
          </div>

          {/* Key Leadership Highlights */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase font-bold text-sky-400 tracking-wider">
              Selected Executive Transformation Highlights
            </h2>
            <div className="space-y-2.5">
              {caseStudies.map((cs) => (
                <div key={cs.id} className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="text-sm font-bold text-white">{cs.company} — {cs.title}</span>
                    <span className="text-xs text-slate-400 font-medium">{cs.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-emerald-400">{cs.impact}</div>
                  <p className="text-xs text-slate-300">{cs.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills & Tech Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-xs uppercase font-bold text-sky-400 tracking-wider">
                Technology & Architecture
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                AWS, Amazon Connect, Agentic AI, Model Context Protocol (MCP), A2A, Microservices, REST APIs, Golang, Java, Spring Boot, OpenShift, Kubernetes, Docker, PostgreSQL, MySQL, Redis, CI/CD.
              </p>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                Leadership, Education & Certs
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                SAFe 6 Agilist, Post Graduate in Data Science (Great Lakes / Texas McCombs), B.E. Mechanical, Executive P&L (£8M+), 50+ Global Engineering Leadership, Vendor Governance.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}