import React from 'react';
import { CONTENT, SCENE_PROMPTS } from '../constants';
import { Illustration } from './Illustration';

export const AnswersSection: React.FC = () => {
  const { answers } = CONTENT;
  const prompt = SCENE_PROMPTS.find(p => p.id === 'reevaluation')?.prompt || "Looking deeper";

  return (
    <section id="answers" className="py-20 bg-brand-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-12 text-center">
            {answers.headline}
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 relative">
                 <Illustration 
                    prompt={prompt} 
                    alt="Deep investigation illustration" 
                    className="w-full aspect-[4/3] rounded-4xl shadow-soft mb-8"
                    fallbackColor="#264653"
                 />
                 
                 {/* Decorative comparison card */}
                 <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                    <h4 className="font-bold text-brand-dark mb-4 border-b pb-2">Range Comparison</h4>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm text-gray-500 mb-1">
                                <span>Pathological Range (Sick)</span>
                                <span>Broad</span>
                            </div>
                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-gray-400 w-full opacity-30"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm text-brand-teal font-bold mb-1">
                                <span>Functional Range (Optimal)</span>
                                <span>Precise</span>
                            </div>
                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden flex justify-center">
                                <div className="h-full bg-brand-teal w-1/3 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>

            <div className="space-y-12 order-1 lg:order-2">
                {/* Section 1 */}
                <div>
                    <h3 className="text-2xl font-bold text-brand-terracotta mb-3">{answers.section1Title}</h3>
                    <p className="text-gray-600 leading-relaxed">{answers.section1Body}</p>
                </div>

                {/* Section 2 */}
                <div>
                    <h3 className="text-2xl font-bold text-brand-teal mb-3">{answers.section2Title}</h3>
                    <p className="text-gray-600 leading-relaxed">{answers.section2Body}</p>
                </div>

                {/* Section 3 */}
                <div className="bg-white p-8 rounded-3xl border-l-8 border-brand-yellow shadow-sm">
                    <h3 className="text-2xl font-bold text-brand-dark mb-4">{answers.section3Title}</h3>
                    <p className="text-gray-600 mb-6">{answers.section3Body}</p>
                    <ul className="space-y-4">
                        {answers.list.map((item, idx) => (
                            <li key={idx}>
                                <span className="font-bold text-brand-dark block">{item.title}</span>
                                <span className="text-gray-500 text-sm">{item.desc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};