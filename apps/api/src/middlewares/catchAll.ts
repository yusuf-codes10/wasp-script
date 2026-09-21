import type { Context } from "hono";

// TODO: might not be needed with a utility to throw
const catchAll = async (c: Context): Promise<Response> => {
    return c.json({msg: "Route does not exist!"}, 404);
}

export default catchAll;