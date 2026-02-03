import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// We use a singleton pattern for the AI client if possible, or just instantiate per call
// Note: In a real app, you might want to handle key availability more gracefully.

export const generateIllustration = async (prompt: string): Promise<string | null> => {
  if (!apiKey) {
    console.warn("No API Key found for Gemini.");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Using the specified model for image generation
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt + " -- style: minimalist, flat vector art, headpsace style, soft rounded shapes, warm pastel colors, cream background, high quality",
          },
        ],
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    
    return null;
  } catch (error) {
    console.error("Gemini Image Generation Error:", error);
    return null;
  }
};