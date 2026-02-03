import React from 'react';
import { CONTENT } from '../constants';

export const ContactSection: React.FC = () => {
  const { contact, location, testimonials } = CONTENT;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Contact: Start Your Journey to Optimal Health — includes Visit Colorado Functional Health + map */}
        <div className="bg-brand-dark rounded-4xl p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                 <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 relative z-10 items-start">
                {/* Left: Start Your Journey + phone, location, consultation */}
                <div>
                    <h2 className="text-4xl font-display font-bold mb-6">Start Your Journey to Optimal Health.</h2>
                    <p className="text-brand-lavender text-lg mb-8">
                        If you are tired of being told you are "fine" while you continue to struggle, it is time for a deeper conversation.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start">
                             <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-yellow mr-4 flex-shrink-0">
                                📞
                             </div>
                             <div>
                                 <span className="block text-sm text-gray-400">Phone</span>
                                 <a href={contact.phoneHref} className="text-2xl font-bold hover:text-brand-yellow transition-colors">{contact.phone}</a>
                             </div>
                        </div>
                        
                        <div className="flex items-start">
                             <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-yellow mr-4 flex-shrink-0">
                                📍
                             </div>
                             <div>
                                 <span className="block text-sm text-gray-400">Location</span>
                                 <span className="text-xl block">{contact.address}</span>
                             </div>
                        </div>

                        <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                            <h4 className="font-bold text-brand-yellow mb-2">Initial Consultation</h4>
                            <p className="text-sm text-gray-300">
                                Call our office to see if you qualify for an initial consultation. We review your history, discuss your symptoms, and determine if our functional approach is the right fit.
                            </p>
                            <div className="mt-4 text-sm text-gray-300">
                              <span className="font-bold text-white">Serving:</span> {contact.serviceAreas.join(', ')}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Visit Colorado Functional Health — paragraph, bullets, map */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg text-brand-dark">
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-display font-bold text-brand-dark mb-3">{location.headline}</h3>
                    <p className="text-gray-600 mb-6">{location.body}</p>
                    <ul className="space-y-2 text-sm text-gray-500 mb-6">
                      {location.quickFacts.map((fact, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-brand-terracotta">•</span>
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="h-64 md:h-72">
                    <iframe
                      title="Colorado Functional Health location map"
                      src={location.mapEmbedUrl}
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="p-6 md:p-8 border-t border-gray-100">
                    <a
                      href={location.mapLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-brand-teal font-bold hover:text-brand-terracotta transition-colors"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
            </div>
        </div>

        <div className="mt-12 max-w-xl">
          <div className="bg-brand-cream rounded-4xl p-6 md:p-8 border border-brand-lavender/40">
            <h3 className="text-xl font-bold text-brand-dark mb-4">Patient Stories</h3>
            {testimonials.length > 0 ? (
              <div className="space-y-4">
                {testimonials.map((review, idx) => (
                  <div key={idx} className="bg-white rounded-3xl p-5 shadow-sm">
                    <p className="text-gray-600 text-sm mb-3">“{review.quote}”</p>
                    <p className="text-xs text-gray-500 font-bold">{review.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                Patient review highlights can be added here—e.g. short quotes from Google or other feedback you’d like to feature.
              </p>
            )}
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500 text-xs max-w-2xl mx-auto">
            <p>{contact.disclaimer}</p>
            <p className="mt-4">© {new Date().getFullYear()} Denver Thyroid Solutions. All rights reserved.</p>
        </div>

      </div>
    </section>
  );
};