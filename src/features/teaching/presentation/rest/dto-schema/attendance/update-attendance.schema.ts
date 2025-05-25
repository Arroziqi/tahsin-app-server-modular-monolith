import { z } from 'zod';
import { AttendanceStatusEnum } from '../../../../../../common/types/enum/attendance-status.enum';

export const UpdateAttendanceSchema = z.object({
  id: z.number(),
  attendance: z.nativeEnum(AttendanceStatusEnum).optional(),
  studentId: z.number().optional(),
  scheduleId: z.number().optional(),
});

export type UpdateAttendanceDto = z.infer<typeof UpdateAttendanceSchema>;
