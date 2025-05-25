import { z } from 'zod';

export const UpdateClassSchema = z.object({
  id: z.number(),
  batchId: z.number().optional(),
  classPriceId: z.number().optional(),
  class: z.string().optional(),
});

export type UpdateClassDto = z.infer<typeof UpdateClassSchema>;
