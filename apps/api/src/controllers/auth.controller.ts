import { createFactory } from "hono/factory";
import type { registerType } from "@shared/types/sekishoUser";
import {
  registerSchema,
  loginSchema,
  fullUserSchema,
} from "@shared/validation/sekishoUser";
import { zValidator } from "@hono/zod-validator";

const factory = createFactory<{}>();

export const register = factory.createHandlers(
  zValidator("json", registerSchema),
  async (c) => {
    const body = c.req.valid("json");
    // a post request to Sekisho
    try {
      const response = await fetch(
        "https://sekisho.onrender.com/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        },
      );

      const data = await response.json();

      console.log(body);

      console.group("📡 Sekisho /auth/register");
      console.log("Status    :", response.status, response.statusText);
      console.log("Ok        :", response.ok);
      console.log("Body      :", data);
      console.groupEnd();

      if (!response.ok) {
        return c.json({ msg: "Registration failed", error: data }, 400);
      }
      return c.json({ msg: "user registered", data });
    } catch (error) {
      console.group("💥 Sekisho /auth/register - FAILED");
      console.error("Error     :", error);
      console.groupEnd();

      return c.json({ msg: "Internal error" }, 500);
    }
  },
);

export const login = factory.createHandlers((c) => {
  return c.json({ msg: "user logged in!" });
});
