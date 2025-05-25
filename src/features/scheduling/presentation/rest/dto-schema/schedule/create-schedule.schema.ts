import { z } from 'zod';

export const CreateScheduleSchema = z.object({
  classId: z.number(),
  teacherId: z.number(),
  dayId: z.number(),
  timeId: z.number(),
});

export type CreateScheduleDto = z.infer<typeof CreateScheduleSchema>;
