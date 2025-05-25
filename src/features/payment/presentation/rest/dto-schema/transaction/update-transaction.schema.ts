import { z } from 'zod';

export const UpdateTransactionSchema = z.object({
  id: z.number(),
  bankAccountId: z.number().optional(),
  billId: z.number().optional(),
  transactionTypeId: z.number().optional(),
  transactionStatusId: z.number().optional(),
});

export type UpdateTransactionDto = z.infer<typeof UpdateTransactionSchema>;
