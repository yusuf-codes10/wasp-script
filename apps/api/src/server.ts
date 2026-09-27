import { Hono } from "hono";

import logger from '@/middlewares/logger';
import catchAll from "./middlewares/catchAll";

import authRouter from '@/routes/auth.route';
import challengesRouter from '@/routes/challenge.route';
import submissionRouter from '@/routes/submission.route';
import { cors } from "hono/cors";

const app = new Hono();

app.use('*', cors({
  origin: process.env.CORS_ORIGIN ?? 'http://localhost:5173', // my Vue dev server
  allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // ← important for cookies
}));

app.use(logger);

app.route('/', authRouter);
app.route('/challenges', challengesRouter);
app.route('/submission', submissionRouter);

app.get("/admin", (c) => {
  return c.json({ msg: "Hello Admin!" });
});
app.use(catchAll);

export default app;
