import { z } from 'zod';

export const CreateScoreSchema = z.object({
  value: z.number(),
  studentId: z.number(),
  taskId: z.number(),
});

export type CreateScoreDto = z.infer<typeof CreateScoreSchema>;
