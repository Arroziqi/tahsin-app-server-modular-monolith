import { z } from 'zod';

export const UpdateStudentSchema = z.object({
  id: z.number(),
  fullName: z.string(),
  motivation: z.string(),
  levelId: z.number().optional(),
  classId: z.number(),
  enrollmentId: z.number(),
  studentStatusId: z.number().optional(),
  updatedBy: z.number().optional(),
});
