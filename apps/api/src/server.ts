import { Hono } from "hono";
import type { NewUser } from "@shared/types/user";

import logger from '@/middlewares/logger';
import catchAll from "./middlewares/catchAll";

import authRouter from '@/routes/auth.route';
import challengesRouter from '@/routes/challenge.route';

const app = new Hono();

const user: NewUser = {
  username: "claire",
  email: "claire@gmail.com",
};

app.use(logger);

app.route('/', authRouter);
app.route('/challenges', challengesRouter);

app.get("/admin", (c) => {
  return c.json({ msg: "Hello Admin!" });
});
app.use(catchAll);

export default app;
