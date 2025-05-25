import { z } from 'zod';

export const UpdateClassPriceSchema = z.object({
  id: z.number(),
  price: z.number().optional(),
});

export type UpdateClassPriceDto = z.infer<typeof UpdateClassPriceSchema>;
