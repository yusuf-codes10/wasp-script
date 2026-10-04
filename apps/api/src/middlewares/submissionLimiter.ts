import { rateLimiter } from "hono-rate-limiter";
import type { jwtPayload } from "@shared/types/user";
import { HTTPException } from "hono/http-exception";

export const submissionLimiter = rateLimiter({
  windowMs: 60 * 1000,
  limit: 5,
  keyGenerator: (c) => {
    const payload = c.get("jwtPayload") as jwtPayload;
    return `submit:${payload.id}`;
  },
  handler: () => {
    throw new HTTPException(429, {
      message: "Too many submissions, slow down.",
    });
  },
});
