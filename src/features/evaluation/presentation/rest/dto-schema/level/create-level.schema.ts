import { z } from 'zod';

export const CreateLevelSchema = z.object({
  level: z.string(),
});

export type CreateLevelDto = z.infer<typeof CreateLevelSchema>;
