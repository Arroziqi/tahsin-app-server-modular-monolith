import { z } from 'zod';

export const CreateTaskSchema = z.object({
  moduleId: z.number(),
  teacherId: z.number(),
  task: z.string(),
});

export type CreateTaskDto = z.infer<typeof CreateTaskSchema>;
