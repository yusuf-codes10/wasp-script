import { createSelectSchema, createInsertSchema,  } from "drizzle-zod";
import { users } from '../../../db/src/schema';


export const selectUserSchema = createSelectSchema(users);
export const insertUserSchema = createInsertSchema(users).omit({
    id: true,
    createdAt: true
});