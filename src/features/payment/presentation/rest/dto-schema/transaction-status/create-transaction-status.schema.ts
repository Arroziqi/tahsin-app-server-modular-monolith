import { z } from 'zod';

export const CreateTransactionStatusSchema = z.object({
  status: z.string(),
});

export type CreateTransactionStatusDto = z.infer<
  typeof CreateTransactionStatusSchema
>;
