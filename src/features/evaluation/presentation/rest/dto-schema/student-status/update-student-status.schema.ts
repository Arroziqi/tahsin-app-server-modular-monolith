import { z } from 'zod';

export const UpdateStudentStatusSchema = z.object({
  id: z.number(),
  status: z.string().optional(),
});

export type UpdateStudentStatusDto = z.infer<typeof UpdateStudentStatusSchema>;
