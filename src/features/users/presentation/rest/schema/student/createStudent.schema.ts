import { z } from 'zod';

export const CreateStudentSchema = z.object({
  fullName: z.string(),
  motivation: z.string(),
  levelId: z.number().optional(),
  classId: z.number(),
  enrollmentId: z.number(),
  studentStatusId: z.number().optional(),
  userId: z.number(),
});
