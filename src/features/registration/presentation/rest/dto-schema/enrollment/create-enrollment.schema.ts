import { z } from 'zod';

export const CreateEnrollmentSchema = z.object({
  userId: z.number(),
  classId: z.number(),
});

export type CreateEnrollmentDto = z.infer<typeof CreateEnrollmentSchema>;
