import { z } from 'zod';

export const CreateModuleSchema = z.object({
  classId: z.number(),
  module: z.string(),
});

export type CreateModuleDto = z.infer<typeof CreateModuleSchema>;
