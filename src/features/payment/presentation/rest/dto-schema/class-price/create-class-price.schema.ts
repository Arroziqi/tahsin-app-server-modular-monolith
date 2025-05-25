import { z } from 'zod';

export const CreateClassPriceSchema = z.object({
  price: z.number(),
});

export type CreateClassPriceDto = z.infer<typeof CreateClassPriceSchema>;
