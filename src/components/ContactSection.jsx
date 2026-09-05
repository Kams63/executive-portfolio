import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import confetti from 'canvas-confetti';
import { profileData } from '../data/profileData';

export default function ContactSection() {
  const { personal, targetRoles } = profileData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    roleInterest: 'VP of Engineering',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }

    const subject = encodeURIComponent(`Executive Discussion: ${formData.roleInterest} at ${formData.company || 'Enterprise'}`);
    const body = encodeURIComponent(`Hi Kamal,\n\nMy name is ${formData.name} from ${formData.company}.\n\nWe are interested in discussing an executive opportunity (${formData.roleInterest}) with you.\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`);
    
    setTimeout(() => {
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Calendar size={14} />
            <span>Executive Dialogue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initiate a Leadership Conversation
          </h2>
          <p className="text-slate-400 text-base">
            Exploring strategic engineering leadership opportunities, advisory, or high-impact digital transformation mandates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Quick Connect */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Direct Executive Channels</h3>
                <p className="text-xs text-slate-400">Reach out directly or connect via LinkedIn</p>
              </div>

              <div className="space-y-4">
                
                {/* Email Card */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-sky-950 border border-sky-500/30 text-sky-400">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Email Address</div>
                      <a href={`mailto:${personal.email}`} className="text-sm font-bold text-white hover:text-sky-400 transition-colors">
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-950 border border-amber-500/30 text-amber-400">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Direct Phone</div>
                      <a href={`tel:${personal.phone}`} className="text-sm font-bold text-white hover:text-amber-400 transition-colors">
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="flex items-center p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Base Location</div>
                      <div className="text-sm font-bold text-white">
                        {personal.location}
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Target Leadership Roles */}
              <div className="pt-2 border-t border-slate-800 space-y-2">
                <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Target Executive Engagements:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {targetRoles.map((role, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Executive Outreach Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-left">
              
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white">Send a Direct Message</h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Fill out this quick form and it will connect directly with Kamal.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-4 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Thank You for Connecting!</h4>
                  <p className="text-sm text-slate-300">
                    Your default email client has been prepared with your message. Kamal looks forward to speaking with you.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. s.jenkins@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Organization / Firm
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Global Financial Corp / Search Partner"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Role of Interest
                      </label>
                      <select
                        value={formData.roleInterest}
                        onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                      >
                        {targetRoles.map((role, idx) => (
                          <option key={idx} value={role} className="bg-slate-900 text-white">
                            {role}
                          </option>
                        ))}
                        <option value="Executive Advisory" className="bg-slate-900 text-white">Executive Advisory / Board</option>
                        <option value="Other Senior Leadership" className="bg-slate-900 text-white">Other Senior Leadership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Message / Mandate Overview
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Brief overview of the mandate, scope, or agenda for discussion..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 text-sm"
                  >
                    <Send size={16} />
                    <span>Send Executive Inquiry</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}