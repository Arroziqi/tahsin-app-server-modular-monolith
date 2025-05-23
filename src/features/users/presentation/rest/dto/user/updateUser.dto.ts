import { z } from 'zod';
import { UpdateUserSchema } from '../../schema/user/updateUser.schema';

export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;
