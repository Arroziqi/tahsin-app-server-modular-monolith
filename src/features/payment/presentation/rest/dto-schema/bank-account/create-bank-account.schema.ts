import { z } from 'zod';

export const CreateBankAccountSchema = z.object({
  accountNumber: z.string(),
  accountName: z.string(),
  bankName: z.string(),
});

export type CreateBankAccountDto = z.infer<typeof CreateBankAccountSchema>;
