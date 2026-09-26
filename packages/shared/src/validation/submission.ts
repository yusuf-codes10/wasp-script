import { z } from "zod";

export const promptSchema = z.object({
  code: z.string().min(1, "Code cannot be empty").max(5000, "Code is too long"),
  challengeId: z
    .number()
    .int("Must be a whole number")
    .positive("Must be a positive number")
    .min(1, "Invalid challenge ID"),
});
