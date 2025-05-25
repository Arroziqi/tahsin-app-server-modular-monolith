import { z } from 'zod';

export const CreateBatchSchema = z.object({
  year: z.number(),
  batch: z.string(),
});

export type CreateBatchDto = z.infer<typeof CreateBatchSchema>;
