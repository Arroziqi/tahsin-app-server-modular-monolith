import { Time } from '@prisma/client';
import { TimeEntity } from '../../domain/entities/time.entity';

export class TimeMapper {
  static toEntity(raw: Time): TimeEntity {
    return new TimeEntity({
      id: raw.id,
      startTime: raw.startTime,
      endTime: raw.endTime,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: Time[]): TimeEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
