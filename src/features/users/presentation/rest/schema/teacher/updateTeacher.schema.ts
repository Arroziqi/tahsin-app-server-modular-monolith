import { z } from 'zod';

export const UpdateTeacherSchema = z.object({
  id: z.number(),
  nip: z.string(),
  fullName: z.string(),
  accountNumber: z.string().optional(),
  accountName: z.string().optional(),
  bankName: z.string().optional(),
  updatedBy: z.number().optional(),
});
