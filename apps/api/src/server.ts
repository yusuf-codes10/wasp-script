import { Hono } from "hono";
import type { NewUser } from "@shared/types/user";

import logger from '@/middlewares/logger';
import catchAll from "./middlewares/catchAll";

import authRouter from '@/routes/auth.route';

const app = new Hono();

const user: NewUser = {
  username: "claire",
  email: "claire@gmail.com",
};

app.use(logger);
app.use(catchAll);

app.route('/', authRouter);

app.get("/", (c) => {
  return c.json({ msg: "Hey man", user });
});

app.get("/admin", (c) => {
  return c.json({ msg: "Hello Admin!" });
});

export default app;
