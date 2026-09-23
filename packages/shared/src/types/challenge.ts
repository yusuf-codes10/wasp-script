import { selectChallengeSchema, insertChallengeSchema } from '../validation/challenge';
import { z } from 'zod';

export type Challenge = z.infer<typeof selectChallengeSchema>;
export type NewChallenge = z.infer<typeof insertChallengeSchema>;