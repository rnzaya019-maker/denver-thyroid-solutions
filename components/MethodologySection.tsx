import React from 'react';
import { CONTENT, SCENE_PROMPTS } from '../constants';
import { Illustration } from './Illustration';

export const MethodologySection: React.FC = () => {
  const { methodology } = CONTENT;
  const prompt = SCENE_PROMPTS.find(p => p.id === 'brain-body')?.prompt || "Connection";

  return (
    <section id="methodology" className="py-20 bg-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">
            {methodology.headline}
          </h2>
          <p className="text-xl text-brand-teal font-medium">
            {methodology.subheadline}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-brand-cream rounded-4xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-brand-dark text-white flex items-center justify-center text-2xl font-bold mb-6">
                    1
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">Comprehensive Investigation</h3>
                <p className="text-gray-600 mb-4">{methodology.steps[0].body}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                    {methodology.steps[0].items?.map((item, i) => (
                        <li key={i} className="flex items-start">
                            <span className="mr-2 text-brand-terracotta">•</span>
                            {item.split(":")[0]}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Step 2 - Highlighted */}
            <div className="bg-brand-teal rounded-4xl p-8 text-white shadow-xl transform lg:-translate-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white text-brand-teal flex items-center justify-center text-2xl font-bold mb-6">
                    2
                </div>
                <h3 className="text-xl font-bold text-white mb-4">NEI Framework</h3>
                <p className="text-brand-cream/90 mb-6 leading-relaxed">
                    {methodology.steps[1].body}
                </p>
                <div className="mt-auto">
                     <Illustration 
                        prompt={prompt} 
                        alt="Brain Body Connection" 
                        className="w-full h-32 rounded-xl"
                        fallbackColor="#F4A261"
                     />
                </div>
            </div>

            {/* Step 3 */}
            <div className="bg-brand-cream rounded-4xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-brand-coral text-white flex items-center justify-center text-2xl font-bold mb-6">
                    3
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">Targeted Nutritional Therapy</h3>
                <p className="text-gray-600">
                    {methodology.steps[2].body}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};