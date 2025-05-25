import { z } from 'zod';

export const UpdateComponentSchema = z.object({
  id: z.number(),
  moduleId: z.number().optional(),
  component: z.string().optional(),
});

export type UpdateComponentDto = z.infer<typeof UpdateComponentSchema>;
