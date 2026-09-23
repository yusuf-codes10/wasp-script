import { createFactory } from 'hono/factory';

const factory = createFactory();

export const getAllChallenges = factory.createHandlers((c) => {
    return c.json({msg: 'all challenges'});
});