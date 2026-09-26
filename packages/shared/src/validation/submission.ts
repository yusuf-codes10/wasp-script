import { z } from "zod";

export const promptSchema = z.object({
  code: z
    .string(),
  challengeId: z
    .number(),
});