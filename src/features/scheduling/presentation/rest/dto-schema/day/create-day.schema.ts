import { z } from 'zod';

export const CreateDaySchema = z.object({
  day: z.string(),
});

export type CreateDayDto = z.infer<typeof CreateDaySchema>;
