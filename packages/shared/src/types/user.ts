import { selectUserSchema, insertUserSchema } from '../validation/user';
import { z } from 'zod';

export type User = z.infer<typeof selectUserSchema>;
export type NewUser = z.infer<typeof insertUserSchema>;

// jwt payload shape
export type jwtPayload = Pick<User, 'id' | 'username' | 'email'>;
