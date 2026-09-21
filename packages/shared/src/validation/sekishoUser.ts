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

// what our API grabs and need from the user, the password geenrated by Sekisho
export const registerSchema = loginSchema.extend({
  email: z.string().email("Invalid email adress!").trim().toLowerCase(),
  fullName: z
    .string()
    .min(5, "Full name must be at least 5 characters!")
    .max(20, "Full name cannot exceed 20 characters!")
    .trim()
    .nullish(), // both null or undefined
  
});

// db level
export const fullUserSchema = registerSchema.extend({
  id: z.number(),
  createdAt: z.date(),
});
