import { Hono } from "hono";
import type { NewUser } from "@shared/types/user";

import logger from '@/middlewares/logger';
import catchAll from "./middlewares/catchAll";

import authRouter from '@/routes/auth.route';
import challengesRouter from '@/routes/challenge.route';
import { cors } from "hono/cors";

const app = new Hono();

app.use('*', cors({
  origin: 'http://localhost:5173', // my Vue dev server
  allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // ← important for cookies
}));

app.use(logger);

app.route('/', authRouter);
app.route('/challenges', challengesRouter);

app.get("/admin", (c) => {
  return c.json({ msg: "Hello Admin!" });
});
app.use(catchAll);

export default app;
