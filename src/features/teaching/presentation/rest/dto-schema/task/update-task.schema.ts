import { z } from 'zod';

export const UpdateTaskSchema = z.object({
  id: z.number(),
  moduleId: z.number().optional(),
  teacherId: z.number().optional(),
  task: z.string().optional(),
});

export type UpdateTaskDto = z.infer<typeof UpdateTaskSchema>;
