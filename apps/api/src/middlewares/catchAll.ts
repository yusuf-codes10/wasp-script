import type { Context } from "hono";

export const catchAll = (c: Context) => {
    return c.json({msg: "Route does not exist!"}, 404);
}