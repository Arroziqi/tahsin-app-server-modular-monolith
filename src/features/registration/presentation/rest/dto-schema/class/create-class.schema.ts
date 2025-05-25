import { z } from 'zod';

export const CreateClassSchema = z.object({
  batchId: z.number().optional(),
  classPriceId: z.number(),
  class: z.string(),
});

export type CreateClassDto = z.infer<typeof CreateClassSchema>;
