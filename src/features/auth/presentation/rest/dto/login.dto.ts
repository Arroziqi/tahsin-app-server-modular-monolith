import { z } from 'zod';
import { LoginSchema } from '../schema/login.schema';

export type LoginDto = z.infer<typeof LoginSchema>;
