import { z } from 'zod';
import { UpdateStudentSchema } from '../../schema/student/updateStudent.schema';

export type UpdateStudentDto = z.infer<typeof UpdateStudentSchema>;
