import { z } from 'zod';

export const CreateTimeSchema = z.object({
  startTime: z.number(),
  endTime: z.number(),
});

export type CreateTimeDto = z.infer<typeof CreateTimeSchema>;
