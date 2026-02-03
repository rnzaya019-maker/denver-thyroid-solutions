import React from 'react';
import { CONTENT } from '../constants';
import logo from '../assets/logo-favicon.png';
import heroIllustration from '../assets/illustration-feeling-unwell-labs-normal.png';

export const HeroSection: React.FC = () => {
  const { home } = CONTENT;

  return (
    <section id="home" className="min-h-screen pt-24 pb-12 flex items-center relative overflow-hidden bg-brand-cream">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-teal/5 rounded-l-4xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-yellow/20 text-brand-dark font-bold text-xs uppercase tracking-wider mb-2">
              Functional Medicine in Denver
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-dark leading-tight">
              {home.headline}
            </h1>
            <h2 className="text-xl md:text-2xl text-brand-teal font-semibold">
              {home.subheadline}
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
              {home.body}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={CONTENT.contact.phoneHref}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-brand-teal rounded-full hover:bg-brand-dark shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Schedule Consultation
              </a>
              <a 
                href="#answers"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-dark transition-all duration-200 bg-white border-2 border-brand-lavender rounded-full hover:border-brand-teal hover:bg-brand-cream"
              >
                Read Answers
              </a>
            </div>

            <div className="flex items-center gap-4 bg-white/80 border border-brand-lavender/40 rounded-3xl p-4">
              <span className="flex h-24 w-24 flex-shrink-0 overflow-hidden rounded-full bg-white shadow-sm">
                <img src={logo} alt="Colorado Functional Health" className="h-full w-full object-cover" />
              </span>
              <div>
                <p className="text-sm font-bold text-brand-dark">Colorado Functional Health, Denver</p>
                <p className="text-xs text-gray-500">Serving Washington Virginia Vale, Hilltop, Englewood, and Virginia Village</p>
              </div>
            </div>

            {/* List */}
            <div className="mt-8 bg-white p-6 rounded-3xl shadow-sm border border-brand-lavender/50">
              <h3 className="font-bold text-brand-dark mb-4">{home.listTitle}</h3>
              <ul className="space-y-3">
                {home.listItems.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-brand-terracotta mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Illustration: feeling unwell, labs "normal" */}
          <div className="relative">
             <img
                src={heroIllustration}
                alt="Feeling unwell but labs are normal? We look at stress, gut health, and lifestyle."
                className="w-full aspect-square md:aspect-[4/5] lg:aspect-square object-contain rounded-3xl shadow-soft"
             />
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg max-w-xs hidden md:block">
               <p className="text-sm text-brand-dark italic border-l-4 border-brand-yellow pl-3">
                 "{home.solution}"
               </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};