import { createFactory } from "hono/factory";

const factroy = createFactory<{}>();

export const getChallengeResult = factroy.createHandlers((c) => {

    const prompt = '';
    return c.json({});
});