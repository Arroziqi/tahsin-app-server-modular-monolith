import { z } from 'zod';

export const CreateComponentSchema = z.object({
  moduleId: z.number(),
  component: z.string(),
});

export type CreateComponentDto = z.infer<typeof CreateComponentSchema>;
