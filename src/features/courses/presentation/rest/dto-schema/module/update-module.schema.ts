import { z } from 'zod';

export const UpdateModuleSchema = z.object({
  id: z.number(),
  classId: z.number().optional(),
  module: z.string().optional(),
});

export type UpdateModuleDto = z.infer<typeof UpdateModuleSchema>;
