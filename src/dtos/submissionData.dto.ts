import * as z from "zod";

export const submissionData = z
  .object({
    userId: z.string(),
    problemId: z.string(),
    code: z.string(),
    language: z.string(),
  })
  .strict();

export type submissionDto = z.infer<typeof submissionData>;
