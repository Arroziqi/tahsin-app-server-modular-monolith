import { Schedule } from '@prisma/client';
import { ScheduleEntity } from '../../domain/entities/schedule.entity';

export class ScheduleMapper {
  static toEntity(raw: Schedule): ScheduleEntity {
    return new ScheduleEntity({
      id: raw.id,
      classId: raw.classId,
      teacherId: raw.teacherId,
      dayId: raw.dayId,
      timeId: raw.timeId,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: Schedule[]): ScheduleEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
