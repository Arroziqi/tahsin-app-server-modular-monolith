import { z } from 'zod';

export const CreateTeacherSchema = z.object({
  nip: z.string(),
  fullName: z.string(),
  accountNumber: z.string().optional(),
  accountName: z.string().optional(),
  bankName: z.string().optional(),
  userId: z.number(),
  createdBy: z.number().optional(),
});
