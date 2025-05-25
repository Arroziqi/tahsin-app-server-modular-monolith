import { z } from 'zod';

export const UpdateTransactionStatusSchema = z.object({
  id: z.number(),
  status: z.string().optional(),
});

export type UpdateTransactionStatusDto = z.infer<
  typeof UpdateTransactionStatusSchema
>;
