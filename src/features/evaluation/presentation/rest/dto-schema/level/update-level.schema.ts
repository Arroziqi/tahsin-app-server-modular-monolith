import { z } from 'zod';

export const UpdateLevelSchema = z.object({
  id: z.number(),
  level: z.string().optional(),
});

export type UpdateLevelDto = z.infer<typeof UpdateLevelSchema>;
