import type { Context, Next } from "hono";

// TODO: might not be needed with a utility to throw
const catchAll = (c: Context, next: Next) => {
    return c.json({msg: "Route does not exist!"}, 404);
}

export default catchAll;