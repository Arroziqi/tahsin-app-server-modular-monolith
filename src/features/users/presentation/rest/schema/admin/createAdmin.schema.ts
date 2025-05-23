import { z } from 'zod';

export const CreateAdminSchema = z.object({
  noAdmin: z.string(),
  fullName: z.string(),
  userId: z.number(),
});
