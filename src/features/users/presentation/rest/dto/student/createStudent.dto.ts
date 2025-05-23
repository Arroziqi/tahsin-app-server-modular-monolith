import { z } from 'zod';
import { CreateStudentSchema } from '../../schema/student/createStudent.schema';

export type CreateStudentDto = z.infer<typeof CreateStudentSchema>;
