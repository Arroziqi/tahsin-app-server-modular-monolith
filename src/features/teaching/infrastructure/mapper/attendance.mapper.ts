import { Attendance } from '@prisma/client';
import { AttendanceEntity } from '../../domain/entities/attendance.entity';
import { AttendanceStatusEnum } from '../../../../common/types/enum/attendance-status.enum';

export class AttendanceMapper {
  static toEntity(raw: Attendance): AttendanceEntity {
    return new AttendanceEntity({
      id: raw.id,
      attendance: raw.attendance as AttendanceStatusEnum,
      studentId: raw.studentId,
      scheduleId: raw.scheduleId,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: Attendance[]): AttendanceEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
