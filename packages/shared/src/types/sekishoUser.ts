import { loginSchema, registerSchema, fullUserSchema } from '../validation/sekishoUser'
import { z } from 'zod';

export type loginType = z.infer<typeof loginSchema>;
export type registerType = z.infer<typeof registerSchema>;
export type fullUserSchema = z.infer<typeof fullUserSchema>;