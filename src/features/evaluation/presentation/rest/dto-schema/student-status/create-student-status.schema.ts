import { z } from 'zod';

export const CreateStudentStatusSchema = z.object({
  status: z.string(),
});

export type CreateStudentStatusDto = z.infer<typeof CreateStudentStatusSchema>;
