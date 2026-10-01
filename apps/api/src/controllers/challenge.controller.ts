import { createFactory } from "hono/factory";
import { db } from "@db/index";
import { eq, and } from "drizzle-orm";
import { challenges } from "@db/schema";
import { HTTPException } from "hono/http-exception";
import { userProgress } from "@db/schema";
import type { jwtPayload } from "@shared/types/user";
import type { Challenge, toDisplayChallenge } from "@shared/types/challenge";

const factory = createFactory();

type userChallenge = Challenge & { completed: boolean };

export const getAllChallenges = factory.createHandlers(async (c) => {
  const payload = c.get("jwtPayload") as jwtPayload;

  const pageQuery = c.req.query("page");
  const limitQuery = c.req.query("limit");

  // difficulty query
  const difficultyQuery = c.req.query("difficulty");

  const page = Number(pageQuery) || 1;
  const limit = Number(limitQuery) || 5;
  const skip = (page - 1) * limit;

  try {
    const challs = await db
      .select()
      .from(challenges)
      .leftJoin(userProgress,
        and(eq(userProgress.userId, payload.id), eq(userProgress.challengeId, challenges.id)))
      // .groupBy(challenges.id)
      .limit(limit)
      .offset(skip)
      .orderBy(challenges.id);

    // if (!challs.userProgress) {

    // }

    const response: toDisplayChallenge[] = challs.map(({ challenges, userProgress }) => ({
      ...challenges,
      completed: userProgress !== null,
    }));
    return c.json(response);
  } catch (error) {
    console.log(error);
  }
});

// TODO: gotta fix the unique id combo and reddundant data

export const getChallengeById = factory.createHandlers(async (c) => {
  const id = c.req.param("id");
  try {
    const [foundChallenge] = await db
      .select()
      .from(challenges)
      .where(eq(challenges.id, Number(id)));

    if (!foundChallenge)
      throw new HTTPException(404, { message: "challenge not found!" });
    return c.json(foundChallenge);
  } catch (error) {
    console.log(error);
  }
});
