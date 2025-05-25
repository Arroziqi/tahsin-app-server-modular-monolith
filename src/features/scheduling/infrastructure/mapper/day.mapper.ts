import { Day } from '@prisma/client';
import { DayEntity } from '../../domain/entities/day.entity';

export class DayMapper {
  static toEntity(raw: Day): DayEntity {
    return new DayEntity({
      id: raw.id,
      day: raw.day,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: Day[]): DayEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
