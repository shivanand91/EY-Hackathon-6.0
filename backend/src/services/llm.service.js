import OpenAI from "openai";
import { ENV } from "../config/env.js";

let client = null;

// Initialize OpenAI client only if API key is present
if (ENV.OPENAI_API_KEY) {
  client = new OpenAI({
    apiKey: ENV.OPENAI_API_KEY
  });
}

/**
 * Generate a human-friendly explanation using LLM.
 * Falls back to static explanation if API key is missing.
 */
export async function generateExplanation(prompt) {
  // Fallback mode (important for hackathon demo)
  if (!client) {
    return (
      "An issue has been detected in your vehicle. " +
      "Based on current readings, maintenance is recommended soon " +
      "to avoid potential breakdowns."
    );
  }

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an automotive expert who explains technical issues in simple language."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.4
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("LLM Error:", error.message);

    // Hard fallback (never fail the pipeline)
    return (
      "We detected an abnormal pattern in your vehicle health. " +
      "Please follow the recommended service schedule."
    );
  }
}
