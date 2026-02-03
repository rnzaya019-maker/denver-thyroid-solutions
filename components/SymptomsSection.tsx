import React from 'react';
import { CONTENT } from '../constants';
import whyPeopleReachOut from '../assets/illustration-why-people-reach-out.png';
import gutImbalance from '../assets/illustration-gut-imbalance.png';

export const SymptomsSection: React.FC = () => {
  const { symptoms } = CONTENT;

  return (
    <section id="symptoms" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6">
            {symptoms.headline}
          </h2>
          <p className="text-lg text-gray-600">
            {symptoms.body}
          </p>
        </div>

        {/* Why people reach out - fatigue, weight struggle, normal labs unwell */}
        <div className="mb-16 max-w-3xl mx-auto">
          <img
            src={whyPeopleReachOut}
            alt="Why people reach out: fatigue, mood swings, weight struggle, normal labs but feeling unwell"
            className="w-full h-auto object-contain rounded-3xl shadow-soft"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {symptoms.list.map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-brand-cream hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-brand-lavender">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-4">
                <span className="font-bold text-xl">{idx + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-dark rounded-4xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-display font-bold text-brand-yellow mb-4">The "Normal" Trap</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {symptoms.note}
              </p>
            </div>
            <div className="hidden md:block">
              <img
                src={gutImbalance}
                alt="Gut imbalance: good vs bad bacteria and how it affects how you feel"
                className="w-full h-48 object-contain rounded-2xl max-w-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};