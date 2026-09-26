import { promptSchema } from '../validation/submission';
import { z } from 'zod';

export type Submission = z.infer<typeof promptSchema>;