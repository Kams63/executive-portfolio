import React, { useState } from 'react';
import { 
  Cpu, 
  Search, 
  Sparkles, 
  Layers, 
  Check, 
  ShieldCheck, 
  Terminal, 
  Cloud, 
  Database,
  BrainCircuit
} from 'lucide-react';
import { profileData } from '../data/profileData';

const categoryIcons = {
  "Cloud & Infrastructure": Cloud,
  "AI & Data Engineering": BrainCircuit,
  "Architecture & Engineering": Layers,
  "Languages & Frameworks": Terminal,
  "Leadership & Operating Models": ShieldCheck
};

export default function TechRadar() {
  const { technologyRadar } = profileData;
  const categories = Object.keys(technologyRadar);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories.filter(cat => {
    if (selectedCategory !== "All" && selectedCategory !== cat) return false;
    return true;
  });

  return (
    <section id="radar" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={14} />
            <span>Interactive Capability Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technology & AI Stack
          </h2>
          <p className="text-slate-400 text-base">
            From foundational cloud infrastructure and high-volume banking backends to modern Agentic AI workflows, LLM orchestration, and SAFe enterprise governance.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === "All"
                  ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              All Capabilities
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search skills, tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category] || Layers;
            const items = technologyRadar[category].filter(item => 
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.level.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (items.length === 0 && searchQuery) return null;

            return (
              <div 
                key={category}
                className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800">
                    <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-sky-400">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {category}
                      </h3>
                      <span className="text-xs text-slate-400 font-normal">
                        {items.length} verified competencies
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {items.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/60 hover:border-slate-700 transition-colors"
                      >
                        <div className="space-y-0.5 text-left">
                          <div className="text-sm font-semibold text-slate-200">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {item.tag}
                          </div>
                        </div>

                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                          item.level.includes('Expert') || item.level.includes('Certified') || item.level.includes('Executive')
                            ? 'bg-amber-950/60 border-amber-500/30 text-amber-300'
                            : 'bg-sky-950/60 border-sky-500/30 text-sky-300'
                        }`}>
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}