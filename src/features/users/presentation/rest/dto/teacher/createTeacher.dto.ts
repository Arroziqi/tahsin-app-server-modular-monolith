import { z } from 'zod';
import { CreateTeacherSchema } from '../../schema/teacher/createTeacher.schema';

export type CreateTeacherDto = z.infer<typeof CreateTeacherSchema>;
