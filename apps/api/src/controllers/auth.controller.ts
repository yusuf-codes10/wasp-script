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
    const body = c.req.valid('json');
    // a post request to Sekisho
    // try {
    //   await fetch("https://sekisho.onrender.com/auth/register", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //   });
    // } catch (error) {}
    return c.json({ msg: "user registered", body });
  },
);

export const login = factory.createHandlers((c) => {
  return c.json({ msg: "user logged in!" });
});
