import { z } from 'zod';

export const CreateTransactionSchema = z.object({
  bankAccountId: z.number(),
  billId: z.number(),
  transactionTypeId: z.number(),
  transactionStatusId: z.number(),
});

export type CreateTransactionDto = z.infer<typeof CreateTransactionSchema>;
