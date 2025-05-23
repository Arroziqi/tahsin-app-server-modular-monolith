import { z } from 'zod';

export const UpdateStudentSchema = z.object({
  fullName: z.string(),
  motivation: z.string(),
  levelId: z.number().optional(),
  classId: z.number(),
  enrollmentId: z.number(),
  studentStatusId: z.number().optional(),
});
