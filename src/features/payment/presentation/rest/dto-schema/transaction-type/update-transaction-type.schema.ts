import { z } from 'zod';

export const UpdateTransactionTypeSchema = z.object({
  id: z.number(),
  type: z.string().optional(),
});

export type UpdateTransactionTypeDto = z.infer<
  typeof UpdateTransactionTypeSchema
>;
