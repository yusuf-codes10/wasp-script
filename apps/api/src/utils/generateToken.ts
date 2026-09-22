import { sign } from "hono/jwt";
import type { User } from "@shared/types/user";

export const generateToken = (user: Pick<User, 'id' | 'username' | 'email'>): Promise<string> => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is not defined! ");

  return sign(
    {
      id: user.id,
      username: user.username,
      email: user.username,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 7 days, matches your cookie maxAge
    },
    secret,
  );
};
