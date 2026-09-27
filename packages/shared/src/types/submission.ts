import { promptSchema } from '../validation/submission';
import { z } from 'zod';

export type Submission = z.infer<typeof promptSchema>;
export type AIAnswer = {
    role: string;
    content: string | null;
    reasoning: string | null | undefined;
}