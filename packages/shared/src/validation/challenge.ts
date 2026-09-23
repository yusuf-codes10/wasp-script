import { createSelectSchema, createInsertSchema,  } from "drizzle-zod";
import { challenges } from '../../../db/src/schema';

export const selectChallengeSchema = createSelectSchema(challenges);
export const insertChallengeSchema = createInsertSchema(challenges).omit({
    id: true,
    createdAt: true
});

