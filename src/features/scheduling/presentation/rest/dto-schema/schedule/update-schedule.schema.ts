import { z } from 'zod';

export const UpdateScheduleSchema = z.object({
  id: z.number(),
  classId: z.number().optional(),
  teacherId: z.number().optional(),
  dayId: z.number().optional(),
  timeId: z.number().optional(),
});

export type UpdateScheduleDto = z.infer<typeof UpdateScheduleSchema>;
