import { z } from 'zod';
import { UpdateAdminSchema } from '../../schema/admin/updateAdmin.schema';

export type UpdateAdminDto = z.infer<typeof UpdateAdminSchema>;
