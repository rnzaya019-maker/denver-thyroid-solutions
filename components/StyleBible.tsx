import React from 'react';
import { BRAND_COLORS, STYLE_GUIDE, CHARACTERS, SCENE_PROMPTS, BLOG_COVERS } from '../constants';
import { CharacterCard } from './CharacterCard';

export const StyleBible: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg my-12 border border-gray-100">
      <h2 className="text-3xl font-display font-bold text-brand-dark mb-6">Design System & Art Direction</h2>
      
      {/* Colors */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Color Palette</h3>
        <div className="flex flex-wrap gap-4">
          {Object.entries(BRAND_COLORS).map(([name, hex]) => (
            <div key={name} className="flex flex-col items-center">
              <div 
                className="w-16 h-16 rounded-full shadow-md mb-2 border border-gray-200"
                style={{ backgroundColor: hex }}
              />
              <span className="text-xs font-mono text-gray-500">{name}</span>
              <span className="text-xs font-mono font-bold">{hex}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rules */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-2">Shapes & Composition</h3>
          <p className="text-sm text-gray-600 mb-2"><strong>Shapes:</strong> {STYLE_GUIDE.shapes}</p>
          <p className="text-sm text-gray-600 mb-2"><strong>Composition:</strong> {STYLE_GUIDE.composition}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Texture & Shading</h3>
          <p className="text-sm text-gray-600 mb-2"><strong>Shading:</strong> {STYLE_GUIDE.shading}</p>
          <p className="text-sm text-gray-600 mb-2"><strong>Texture:</strong> {STYLE_GUIDE.texture}</p>
        </div>
      </div>

      {/* Characters */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Recurring Characters</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {CHARACTERS.map(char => (
            <CharacterCard key={char.name} character={char} />
          ))}
        </div>
      </div>

      {/* Prompts */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Scene Prompts</h3>
        <ul className="space-y-4">
            {SCENE_PROMPTS.map(p => (
                <li key={p.id} className="bg-brand-cream p-4 rounded-xl border border-brand-lavender">
                    <span className="text-xs uppercase tracking-wide text-brand-terracotta font-bold">{p.context}</span>
                    <h4 className="font-bold text-brand-dark">{p.title}</h4>
                    <p className="text-sm text-gray-600 italic mt-2">"{p.prompt}"</p>
                </li>
            ))}
        </ul>
      </div>

      {/* Blog Covers */}
      <div>
        <h3 className="text-xl font-bold mb-4">Blog Concepts</h3>
        <div className="grid md:grid-cols-3 gap-4">
            {BLOG_COVERS.map((cover, i) => (
                <div key={i} className="p-4 bg-brand-teal bg-opacity-10 rounded-xl">
                    <h4 className="font-bold text-brand-dark text-sm mb-2">{cover.title}</h4>
                    <p className="text-xs text-brand-teal">Uses prompt: {cover.promptId}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};