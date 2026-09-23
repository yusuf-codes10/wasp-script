import { createFactory } from 'hono/factory';
import { db } from '@db/index';
import type { Challenge } from '@shared/types/challenge';
import { selectChallengeSchema } from '@shared/validation/challenge';
import { challenges } from '@db/schema';

const factory = createFactory();

export const getAllChallenges = factory.createHandlers(async (c) => {

    const pageQuery = c.req.query('page');
    const limitQuery = c.req.query('limit');

    const page = Number(pageQuery) || 1;
    const limit = Number(limitQuery) || 5;
    const skip = (page - 1) * limit;
    try {
        const challs = await db.select()
        .from(challenges)
        .groupBy(challenges.id)
        .limit(limit)
        .offset(skip)
        .orderBy(challenges.id);
        return c.json(challs);
    } catch (error) {
        console.log(error);
    }
});