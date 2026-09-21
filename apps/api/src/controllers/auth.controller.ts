import { createFactory } from "hono/factory";
import type { registerType } from "@shared/types/sekishoUser";
import type { User } from "@shared/types/user";
import {
  registerSchema,
  loginSchema,
  fullUserSchema,
} from "@shared/validation/sekishoUser";
import { zValidator } from "@hono/zod-validator";
import { db, users } from "@db/index";
import { eq, or } from "drizzle-orm";
import { HTTPException } from "hono/http-exception";

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

      // storing data in db & signin the token
      // ! type assertion: "As" is idiomatic here since the external data is unkwon
      const { safeUser, token } = data as { safeUser: User; token: string };
      if (!safeUser || !token) {
        // check if user already exist
        const [duplicateUser] = await db
          .select()
          .from(users)
          .where(
            or(
              eq(users.username, safeUser.username),

              eq(users.email, safeUser.email),
            ),
          );

          if (duplicateUser) {
            throw new HTTPException(400, {message: "username or email already exists"});
          }
        // must type the user
        // await db.insert(users).values(safeUser).returning();
        const [createdUser] = await db.insert(users).values({
          id: safeUser.id,
          username: safeUser.username,
          email: safeUser.email,
          fullName: safeUser.fullName,
          createdAt: safeUser.createdAt
        }).returning();

        return c.json({ msg: "user registered", createdUser });
      }

      // TODO: next sign the token here, with auth middleware

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
