import { createFactory } from 'hono/factory';
import { db } from '@db/index';

const factory = createFactory();

export const getAllChallenges = factory.createHandlers((c) => {
    return c.json({msg: 'all challenges'});
});