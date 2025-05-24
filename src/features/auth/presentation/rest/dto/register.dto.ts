import { z } from 'zod';
import { RegisterSchema } from '../schema/register.schema';

export type RegisterDto = z.infer<typeof RegisterSchema>;
