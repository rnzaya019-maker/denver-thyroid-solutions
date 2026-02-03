import React from 'react';
import { CONTENT } from '../constants';
import stressMoodSwing from '../assets/illustration-stress-mood-swing.png';
import gutImbalance from '../assets/illustration-gut-imbalance.png';
import targetedNutritionalTherapy from '../assets/illustration-targeted-nutritional-therapy.png';

const circleWrapperClass = 'mx-auto flex h-36 w-36 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-md ring-1 ring-gray-100';
const circleImageClass = 'h-full w-full object-cover';

export const MethodologySection: React.FC = () => {
  const { methodology } = CONTENT;

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
            {/* Step 1 - Gut health */}
            <div className="bg-brand-cream rounded-4xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-brand-dark text-white flex items-center justify-center text-2xl font-bold mb-6">
                    1
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">Comprehensive Investigation</h3>
                <p className="text-gray-600 mb-4">{methodology.steps[0].body}</p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                    {methodology.steps[0].items?.map((item, i) => (
                        <li key={i} className="flex items-start">
                            <span className="mr-2 text-brand-terracotta">•</span>
                            {item.split(":")[0]}
                        </li>
                    ))}
                </ul>
                <div className="mt-auto flex justify-center">
                  <span className={circleWrapperClass}>
                    <img
                      src={gutImbalance}
                      alt="Gut imbalance and how we look at gut health"
                      className={circleImageClass}
                    />
                  </span>
                </div>
            </div>

            {/* Step 2 - Highlighted: stress, mood, brain-body */}
            <div className="bg-brand-teal rounded-4xl p-8 text-white shadow-xl transform lg:-translate-y-4 flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-white text-brand-teal flex items-center justify-center text-2xl font-bold mb-6">
                    2
                </div>
                <h3 className="text-xl font-bold text-white mb-4">NEI Framework</h3>
                <p className="text-brand-cream/90 mb-6 leading-relaxed">
                    {methodology.steps[1].body}
                </p>
                <div className="mt-auto flex justify-center">
                  <span className={circleWrapperClass}>
                    <img
                      src={stressMoodSwing}
                      alt="Stress load and mood: how we look at brain-body connection"
                      className={circleImageClass}
                    />
                  </span>
                </div>
            </div>

            {/* Step 3 - Targeted Nutritional Therapy */}
            <div className="bg-brand-cream rounded-4xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-brand-coral text-white flex items-center justify-center text-2xl font-bold mb-6">
                    3
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">Targeted Nutritional Therapy</h3>
                <p className="text-gray-600 mb-6">
                    {methodology.steps[2].body}
                </p>
                <div className="mt-auto flex justify-center">
                  <span className={circleWrapperClass}>
                    <img
                      src={targetedNutritionalTherapy}
                      alt="Targeted nutritional therapy: nutrition, lifestyle, and targeted support aligned with your unique needs"
                      className={circleImageClass}
                    />
                  </span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};