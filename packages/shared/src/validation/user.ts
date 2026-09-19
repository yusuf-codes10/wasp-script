import { z } from "zod";
import { createSelectSchema, createInsertSchema,  } from "drizzle-zod";
import { users } from '../../../db/src/schema';


export const selectUserSchema = createSelectSchema(users);