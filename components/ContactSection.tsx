import React from 'react';
import { CONTENT, SCENE_PROMPTS } from '../constants';
import { Illustration } from './Illustration';
import { StyleBible } from './StyleBible';

export const ContactSection: React.FC = () => {
  const { contact } = CONTENT;
  const prompt = SCENE_PROMPTS.find(p => p.id === 'local-trust')?.prompt || "Calm clinic";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="bg-brand-dark rounded-4xl p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                 <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 relative z-10 items-center">
                <div>
                    <h2 className="text-4xl font-display font-bold mb-6">Start Your Journey to Optimal Health.</h2>
                    <p className="text-brand-lavender text-lg mb-8">
                        If you are tired of being told you are "fine" while you continue to suffer, it is time for a second opinion.
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
                                Call our office to see if you qualify for an initial consultation. We will review your history, discuss your symptoms, and determine if our functional medicine approach is right for you.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-full">
                     <Illustration 
                        prompt={prompt} 
                        alt="Calm Clinic Experience" 
                        className="w-full h-full min-h-[400px] object-cover rounded-3xl"
                        fallbackColor="#2A9D8F"
                     />
                </div>
            </div>
        </div>

        <div className="mt-12 text-center text-gray-500 text-xs max-w-2xl mx-auto">
            <p>{contact.disclaimer}</p>
            <p className="mt-4">© {new Date().getFullYear()} Denver Thyroid Solutions. All rights reserved.</p>
        </div>

        {/* Style Bible included for Art Director review */}
        <div className="mt-24 border-t pt-12">
            <p className="text-center text-gray-400 text-sm mb-4">INTERNAL DESIGN SYSTEM REFERENCE</p>
            <StyleBible />
        </div>

      </div>
    </section>
  );
};