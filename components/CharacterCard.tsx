import React from 'react';
import { Character } from '../types';

interface Props {
  character: Character;
}

export const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
      <div 
        className="w-20 h-20 rounded-full mb-4 shadow-inner flex items-center justify-center text-white font-bold text-xl"
        style={{ backgroundColor: character.color }}
      >
        {character.name[0]}
      </div>
      <h4 className="font-bold text-brand-dark text-lg">{character.name}</h4>
      <p className="text-xs text-brand-terracotta font-semibold mb-2">{character.personality}</p>
      <p className="text-sm text-gray-600">{character.description}</p>
    </div>
  );
};