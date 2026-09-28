import { createFactory } from 'hono/factory';
import { db } from '@db/index';
import { eq } from 'drizzle-orm';
import { challenges } from '@db/schema';
import { HTTPException } from 'hono/http-exception';
import { userProgress } from '@db/schema';
import type { jwtPayload } from '@shared/types/user';

const factory = createFactory();

export const getAllChallenges = factory.createHandlers(async (c) => {

    const payload = c.get('jwtPayload') as jwtPayload;

    const pageQuery = c.req.query('page');
    const limitQuery = c.req.query('limit');

    const page = Number(pageQuery) || 1;
    const limit = Number(limitQuery) || 5;
    const skip = (page - 1) * limit;
    try {
        const challs = await db.select()
        .from(challenges)
        .leftJoin(userProgress, eq(userProgress.userId, payload.id))
        .groupBy(challenges.id)
        .limit(limit)
        .offset(skip)
        .orderBy(challenges.id);
        return c.json(challs);
    } catch (error) {
        console.log(error);
    }
});

export const getChallengeById = factory.createHandlers(async (c) => {
    const id = c.req.param('id');
    try {
        const [foundChallenge] = await db.select()
        .from(challenges)
        .where(eq(challenges.id, Number(id)));

        if (!foundChallenge) throw new HTTPException(404, {message: "challenge not found!"});
        return c.json(foundChallenge);
    } catch (error) {
        console.log(error);
    }
})