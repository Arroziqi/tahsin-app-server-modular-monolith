import { z } from 'zod';

export const RegisterSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});
