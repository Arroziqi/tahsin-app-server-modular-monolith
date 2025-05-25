import { z } from 'zod';

export const UpdateTimeSchema = z.object({
  id: z.number(),
  startTime: z.number().optional(),
  endTime: z.number().optional(),
});

export type UpdateTimeDto = z.infer<typeof UpdateTimeSchema>;
