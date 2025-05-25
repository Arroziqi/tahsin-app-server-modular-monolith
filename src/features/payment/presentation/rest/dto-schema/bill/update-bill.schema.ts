import { z } from 'zod';

export const UpdateBillSchema = z.object({
  id: z.number(),
  studentId: z.number().optional(),
  bill: z.number().optional(),
  remainBill: z.number().optional(),
  description: z.string().optional(),
});

export type UpdateBillDto = z.infer<typeof UpdateBillSchema>;
