import { z } from 'zod';

export const UpdateBatchSchema = z.object({
  id: z.number(),
  year: z.number().optional(),
  batch: z.string().optional(),
});

export type UpdateBatchDto = z.infer<typeof UpdateBatchSchema>;
