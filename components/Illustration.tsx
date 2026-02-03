import React, { useState, useEffect } from 'react';
import { generateIllustration } from '../services/geminiService';
import { LoadingState } from '../types';

interface Props {
  prompt: string;
  className?: string;
  alt: string;
  fallbackColor?: string;
}

export const Illustration: React.FC<Props> = ({ prompt, className, alt, fallbackColor = '#2A9D8F' }) => {
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    const fetchImage = async () => {
      setStatus(LoadingState.LOADING);
      try {
        const url = await generateIllustration(prompt);
        if (isMounted) {
            if (url) {
                setImageUrl(url);
                setStatus(LoadingState.SUCCESS);
            } else {
                setStatus(LoadingState.ERROR);
            }
        }
      } catch (e) {
        if (isMounted) setStatus(LoadingState.ERROR);
      }
    };

    // Only fetch if we have an API key in env (simulated check)
    // In a real app, we might trigger this via a button or lazy load
    // For this demo, we'll try to fetch immediately
    if (process.env.API_KEY) {
        fetchImage();
    } else {
        setStatus(LoadingState.ERROR); // Fallback to placeholder immediately if no key
    }

    return () => { isMounted = false; };
  }, [prompt]);

  if (status === LoadingState.SUCCESS && imageUrl) {
    return (
      <img 
        src={imageUrl} 
        alt={alt} 
        className={`object-cover rounded-3xl shadow-soft ${className}`} 
      />
    );
  }

  // Placeholder State (Abstract Art Director Style)
  return (
    <div 
      className={`relative overflow-hidden rounded-3xl flex items-center justify-center p-8 text-center bg-brand-cream border-2 border-dashed border-brand-lavender ${className}`}
    >
      <div 
        className="absolute w-32 h-32 rounded-full opacity-20 -top-4 -left-4"
        style={{ backgroundColor: fallbackColor }}
      />
      <div 
        className="absolute w-24 h-24 rounded-full opacity-20 bottom-4 right-4"
        style={{ backgroundColor: '#E9C46A' }} // Yellow
      />
      <div className="z-10 relative">
        {status === LoadingState.LOADING ? (
            <div className="animate-pulse flex flex-col items-center">
                <div className="h-4 w-4 bg-brand-teal rounded-full animate-bounce mb-2"></div>
                <span className="text-xs text-brand-dark uppercase tracking-widest">Generating Art...</span>
            </div>
        ) : (
            <div className="text-brand-dark opacity-50">
                <span className="block font-display font-bold text-xl mb-2">Illustration</span>
                <span className="text-sm italic">"{prompt.substring(0, 50)}..."</span>
            </div>
        )}
      </div>
    </div>
  );
};