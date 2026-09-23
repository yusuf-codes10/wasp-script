import { createFactory } from 'hono/factory';
import { db } from '@db/index';
import type { Challenge } from '@shared/types/challenge';
import { selectChallengeSchema } from '@shared/validation/challenge';
import { challenges } from '@db/schema';

const factory = createFactory();

export const getAllChallenges = factory.createHandlers(async (c) => {

    try {
        const challs = await db.select()
        .from(challenges);
        return c.json({msg: 'all challenges', challs});
    } catch (error) {
        console.log(error);
    }
});