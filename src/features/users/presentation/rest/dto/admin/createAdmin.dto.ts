import { z } from 'zod';
import { CreateAdminSchema } from '../../schema/admin/createAdmin.schema';

export type CreateAdminDto = z.infer<typeof CreateAdminSchema>;
