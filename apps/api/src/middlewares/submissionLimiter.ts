import { rateLimiter } from "hono-rate-limiter";
import type { jwtPayload } from "@shared/types/user";

export const submissionLimiter = rateLimiter({
    windowMs: 60 * 1000,
    limit: 5,
    keyGenerator: (c) => {
        const payload = c.get('jwtPayload') as jwtPayload;
        return `submit:${payload.id}`;
    },
    message: { error: "Too many submissions, slow down." },
});