import { z } from 'zod';

export const CreateBillSchema = z.object({
  studentId: z.number(),
  bill: z.number(),
  remainBill: z.number(),
  description: z.string().optional(),
});

export type CreateBillDto = z.infer<typeof CreateBillSchema>;
