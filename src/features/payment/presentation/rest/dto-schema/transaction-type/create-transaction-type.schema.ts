import { z } from 'zod';

export const CreateTransactionTypeSchema = z.object({
  type: z.string(),
});

export type CreateTransactionTypeDto = z.infer<
  typeof CreateTransactionTypeSchema
>;
