import { selectChallengeSchema } from '../validation/challenge';
import { z } from 'zod';

export type Challenge = z.infer<typeof selectChallengeSchema>;