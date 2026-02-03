import React from 'react';
import { CONTENT } from '../constants';

export const InsightsSection: React.FC = () => {
  const { insights } = CONTENT;

  return (
    <section className="py-20 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">
            Insights From the Clinic
          </h2>
          <p className="text-lg text-gray-600">
            Practical, grounded guidance from Dr. Arthur’s team to help you feel informed and supported.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((insight, idx) => (
            <article key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-brand-lavender/40">
              <div className="text-xs uppercase tracking-widest text-brand-terracotta font-bold mb-3">
                Clinic Notes
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{insight.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{insight.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
