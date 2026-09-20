import { createSelectSchema  } from "drizzle-zod";
import { challenges } from '../../../db/src/schema';


export const selectChallengeSchema = createSelectSchema(challenges);