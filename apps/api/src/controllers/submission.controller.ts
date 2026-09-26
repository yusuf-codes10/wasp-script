import { createFactory } from "hono/factory";
import Groq from 'groq-sdk';

const factroy = createFactory<{}>();

const client = new Groq() // picks up GROQ_API_KEY from env automatically

export const getChallengeResult = factroy.createHandlers((c) => {

    const prompt = '';
    return c.json({});
});