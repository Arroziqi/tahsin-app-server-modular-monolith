import { z } from 'zod';

export const UpdateScoreSchema = z.object({
  id: z.number(),
  value: z.number().optional(),
  studentId: z.number().optional(),
  taskId: z.number().optional(),
});

export type UpdateScoreDto = z.infer<typeof UpdateScoreSchema>;
