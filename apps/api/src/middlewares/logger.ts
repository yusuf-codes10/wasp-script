import type { Context, Next } from "hono";

const customLogger = async (c: Context, next: Next) => {
    await next();
}

export default customLogger;