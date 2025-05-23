import { z } from 'zod';

export const UpdateAdminSchema = z.object({
  noAdmin: z.string(),
  fullName: z.string(),
});
