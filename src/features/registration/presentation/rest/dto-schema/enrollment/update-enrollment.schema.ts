import { z } from 'zod';

export const UpdateEnrollmentSchema = z.object({
  id: z.number(),
  userId: z.number().optional(),
  classId: z.number().optional(),
});

export type UpdateEnrollmentDto = z.infer<typeof UpdateEnrollmentSchema>;
