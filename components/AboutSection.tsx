import React from 'react';
import { CONTENT } from '../constants';
import drArthur from '../assets/dr-david-arthur.png';

export const AboutSection: React.FC = () => {
  const { about } = CONTENT;

  return (
    <section id="about" className="py-20 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="lg:w-1/3">
                <div className="relative">
                    <div className="absolute inset-0 bg-brand-yellow rounded-4xl transform translate-x-4 translate-y-4"></div>
                    <div className="bg-brand-dark h-96 w-full rounded-4xl relative overflow-hidden">
                        <img 
                          src={drArthur} 
                          alt="Dr. David Arthur in consultation" 
                          className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="lg:w-2/3">
                <h2 className="text-3xl font-display font-bold text-brand-dark mb-2">Meet Your Guide</h2>
                <h3 className="text-xl text-brand-teal font-bold mb-6">{about.name}</h3>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {about.bio}
                </p>

                <div className="bg-white p-8 rounded-3xl shadow-sm mb-8">
                    <h4 className="font-bold text-brand-dark mb-4 uppercase tracking-wide text-sm">Credentials & Expertise</h4>
                    <ul className="space-y-3">
                        {about.credentials.map((cred, i) => (
                            <li key={i} className="flex items-start text-gray-600 text-sm">
                                <svg className="w-5 h-5 text-brand-yellow mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                {cred}
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="text-brand-dark font-medium italic border-l-4 border-brand-terracotta pl-4">
                    {about.closing}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};