import { createFactory } from "hono/factory";
import type { registerType } from "@shared/types/sekishoUser";

const factory = createFactory<{}>();

export const register = factory.createHandlers(async (c) => {
  // a post request to Sekisho
  try {
    await fetch("https://sekisho.onrender.com/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {}
  return c.json({ msg: "user registered" });
});

export const login = factory.createHandlers((c) => {
  return c.json({ msg: "user logged in!" });
});
