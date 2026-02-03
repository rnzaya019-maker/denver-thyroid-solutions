import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SymptomsSection } from './components/SymptomsSection';
import { AnswersSection } from './components/AnswersSection';
import { MethodologySection } from './components/MethodologySection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <div className="font-sans text-brand-dark antialiased selection:bg-brand-yellow selection:text-brand-dark">
      <Header />
      <main>
        <HeroSection />
        <SymptomsSection />
        <AnswersSection />
        <MethodologySection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;