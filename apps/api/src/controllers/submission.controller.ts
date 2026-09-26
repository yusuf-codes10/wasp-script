import { createFactory } from "hono/factory";
import Groq from "groq-sdk";
import { zValidator } from "@hono/zod-validator";
import { db } from "@db/index";
import { challenges } from "@db/schema";
import { eq } from "drizzle-orm";
import { promptSchema } from "@shared/validation/submission";
import { HTTPException } from "hono/http-exception";

const factroy = createFactory<{}>();

export const getChallengeResult = factroy.createHandlers(
  zValidator("json", promptSchema),
  async (c) => {
    const client = new Groq(); // picks up GROQ_API_KEY from env automatically

    const body = c.req.valid("json");
    const { code, challengeId } = body;
    try {
      // find the challenge first
      const [foundChallenge] = await db
        .select()
        .from(challenges)
        .where(eq(challenges.id, challengeId));

      if (!foundChallenge)
        throw new HTTPException(500, {
          message: "something went wrong! No such Challenge",
        });

      const completion = await client.chat.completions.create({
        model: "openai/gpt-oss-20b",
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
          Challenge: ${foundChallenge.title}
          Description: ${foundChallenge.description}

          User's code:
          ${code}

          Evaluate if the code correctly solves the challenge.
            Reply in exactly this format, nothing else:

            ACCEPTED - code is correct

            or

            REJECTED - <one short sentence explaining what is wrong>
        `,
          },
        ],
      });
      return c.json(completion);
    } catch (error) {
      console.error(error);
      throw new HTTPException(500, {
        message: "Something went wrong with the AI evaluation",
      });
    }
  },
);
