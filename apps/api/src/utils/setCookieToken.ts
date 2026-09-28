import type { Context } from "hono";
import { setCookie } from "hono/cookie";

export const setCookieToken = (c: Context, token: string): void => {
  setCookie(c, "auth", token, {
    httpOnly: true,
    secure: true,
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    maxAge: 60 * 60 * 24 * 7,
  });
};
