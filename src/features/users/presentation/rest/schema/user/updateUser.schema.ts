import { z } from 'zod';

export const UpdateUserSchema = z.object({
  id: z.number(),
  username: z.string(),
  password: z.string(),
});
