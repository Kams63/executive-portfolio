import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsGrid from './components/MetricsGrid';
import StrategicPillars from './components/StrategicPillars';
import CaseStudies from './components/CaseStudies';
import TechRadar from './components/TechRadar';
import CareerTimeline from './components/CareerTimeline';
import EducationCertifications from './components/EducationCertifications';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ExecutiveBriefModal from './components/ExecutiveBriefModal';

export default function App() {
  const [isBriefOpen, setIsBriefOpen] = useState(false);

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-400 selection:text-slate-950 antialiased font-sans">
      {/* Executive Navbar */}
      <Navbar 
        onOpenExecutiveBrief={() => setIsBriefOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Executive Content Flow */}
      <main>
        <Hero 
          onOpenExecutiveBrief={() => setIsBriefOpen(true)}
          onOpenContact={handleOpenContact}
        />

        <MetricsGrid />

        <StrategicPillars />

        <CaseStudies />

        <TechRadar />

        <CareerTimeline />

        <EducationCertifications />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenExecutiveBrief={() => setIsBriefOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Modal View for Executive 1-Pager */}
      <ExecutiveBriefModal 
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
      />
    </div>
  );
}