import { z } from 'zod';
import { AttendanceStatusEnum } from '../../../../../../common/types/enum/attendance-status.enum';

export const CreateAttendanceSchema = z.object({
  attendance: z.nativeEnum(AttendanceStatusEnum),
  studentId: z.number(),
  scheduleId: z.number(),
});

export type CreateAttendanceDto = z.infer<typeof CreateAttendanceSchema>;
