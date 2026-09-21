import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, "username should at least have 4 characters")
    .max(15, "Too long")
    .trim()
    .toLowerCase(),
  password: z
    .string()
    .min(8, "password must be at least 8 characters!")
    .max(50, "Password Cannot exceed 50 characters")
    .regex(/[0-9]/, "Password must contain at least one number"),
});
