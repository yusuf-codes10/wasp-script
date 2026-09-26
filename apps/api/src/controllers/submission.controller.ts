import { createFactory } from "hono/factory";
import Groq from "groq-sdk";
import type { Challenge } from '@shared/types/challenge';

const factroy = createFactory<{}>();

const client = new Groq(); // picks up GROQ_API_KEY from env automatically

export const getChallengeResult = factroy.createHandlers(async (c) => {
  const prompt = "";
  try {
    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      max_tokens: 1024,
      messages: [
        {
          role: "system",
          content:
            "You are a JavaScript code evaluator for a coding challenges platform called WaspScript.",
        },
        {
          role: "user",
          content: `
          Challenge: ${challenge.title}
          Description: ${challenge.description}

          User's code:
          ${code}

          Evaluate if the code correctly solves the challenge.
        `,
        },
      ],
    });
    return c.json({});
  } catch (error) {
    console.log(error);
  }
});
