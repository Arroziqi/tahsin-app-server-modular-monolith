import { z } from 'zod';

export const UpdateBankAccountSchema = z.object({
  id: z.number(),
  accountNumber: z.string().optional(),
  accountName: z.string().optional(),
  bankName: z.string().optional(),
});

export type UpdateBankAccountDto = z.infer<typeof UpdateBankAccountSchema>;
