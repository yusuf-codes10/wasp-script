import type { Context, Next } from "hono";

const customLogger = async (c: Context, next: Next): Promise<void> => {
  await next();

  console.log(`${c.req.method} ${c.req.url}`);
};

export default customLogger;
