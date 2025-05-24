import { z } from 'zod';

export const UpdateAdminSchema = z.object({
  id: z.number(),
  noAdmin: z.string(),
  fullName: z.string(),
  updatedBy: z.number().optional(),
});
