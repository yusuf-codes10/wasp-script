import { createFactory } from "hono/factory";
import type { User, jwtPayload } from "@shared/types/user";
import type { Context } from 'hono';
import {
  registerSchema,
  loginSchema,
} from "@shared/validation/sekishoUser";
import { zValidator } from "@hono/zod-validator";
import { db, users } from "@db/index";
import { eq, or } from "drizzle-orm";
import { HTTPException } from "hono/http-exception";
import { issueSession } from "@/utils/issueSession";
import { destroyToken } from "@/utils/destroyToken";

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
        throw new HTTPException(500, {
          message: "Invalid response from Sekisho",
        });
      }
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
        await issueSession(c, {
          id: duplicateUser.id,
          username: duplicateUser.username,
          email: duplicateUser.email,
        });
        return c.json({ msg: "user already registered, session issued" });
      }
      // must type the user
      // await db.insert(users).values(safeUser).returning();
      const [createdUser] = await db
        .insert(users)
        .values({
          id: safeUser.id,
          username: safeUser.username,
          email: safeUser.email,
          fullName: safeUser.fullName,
          createdAt: safeUser.createdAt
            ? new Date(safeUser.createdAt)
            : new Date(), // nullish fallback
        })
        .returning();

      if (!createdUser) {
        throw new HTTPException(500, { message: "Could not create user!" });
      }
      // TODO: next sign the token here, with auth middleware

      return c.json({ msg: "user registered", createdUser });
    } catch (error) {
      console.group("💥 Sekisho /auth/register - FAILED");
      console.error("Error     :", error);
      console.groupEnd();

      return c.json({ msg: "Internal error" }, 500);
    }
  },
);

export const login = factory.createHandlers(
  zValidator("json", loginSchema),
  async (c) => {
    const toLogUser = c.req.valid("json");
    try {
      // 1- sekisho login first
      const response = await fetch("https://sekisho.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toLogUser),
      });

      const data = await response.json();

      console.group("📡 Sekisho /auth/login");
      console.log("Status    :", response.status, response.statusText);
      console.log("Ok        :", response.ok);
      console.log("Body      :", data);
      console.groupEnd();

      if (!response.ok) {
        // throw or return something
        return c.json({ msg: "Login failed", error: data }, 400);
      }

      console.log(data);

      const { safeUser, token } = data as { safeUser: User; token: string };

      // check if user exists
      const [foundUser] = await db
        .select()
        .from(users)
        .where(eq(users.username, safeUser.username));

      if (!foundUser)
        throw new HTTPException(404, {
          message: "User does not exist! Sign Up first",
        });

      // issue the session
      await issueSession(c, {
        id: foundUser.id,
        username: foundUser.username,
        email: foundUser.email,
      });

      return c.json({ msg: "user logged in!" });
    } catch (error) {
      console.group("💥 Sekisho /auth/login - FAILED");
      console.error("Error     :", error);
      console.groupEnd();

      return c.json({ msg: "Internal error" }, 500);
    }
  },
);

export const logout = factory.createHandlers((c: Context) => {
  destroyToken(c);
  return c.json({ msg: "logged out succesfuly!" });
})

export const verifyUser = factory.createHandlers(async (c: Context) => {
  const payload = await c.get('jwtPayload') as jwtPayload;

  const [user] = await db.select()
  .from(users)
  .where(eq(users.id, payload.id));

  return c.json({user})
});