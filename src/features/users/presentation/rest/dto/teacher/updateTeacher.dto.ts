import { z } from 'zod';
import { UpdateTeacherSchema } from '../../schema/teacher/updateTeacher.schema';

export type UpdateTeacherDto = z.infer<typeof UpdateTeacherSchema>;
