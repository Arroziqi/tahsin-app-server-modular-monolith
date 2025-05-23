import { z } from 'zod';
import { CreateUserSchema } from '../../schema/user/createUser.schema';

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
