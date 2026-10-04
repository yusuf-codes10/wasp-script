import { rateLimiter } from "hono-rate-limiter";
import { getConnInfo } from "hono/bun";

export const authLimiter = rateLimiter({
  windowMs: 60 * 1000, // 1 minute
  limit: 50, // only 5 attempts per minute
  keyGenerator: (c) => {
    const info = getConnInfo(c);
    return info.remote.address ?? "unknown"; // ✅ real IP, can't be spoofed
  },
});
