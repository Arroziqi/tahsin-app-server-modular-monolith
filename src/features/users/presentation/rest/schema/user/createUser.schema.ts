import { z } from 'zod';

export const CreateUserSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
  createdBy: z.number().optional(),
});
