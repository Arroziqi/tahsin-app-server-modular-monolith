import { z } from 'zod';

export const UpdateDaySchema = z.object({
  id: z.number(),
  day: z.string().optional(),
});

export type UpdateDayDto = z.infer<typeof UpdateDaySchema>;
