import { Level } from '@prisma/client';
import { LevelEntity } from '../../domain/entities/level.entity';

export class LevelMapper {
  static toEntity(raw: Level): LevelEntity {
    return new LevelEntity({
      id: raw.id,
      level: raw.level,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: Level[]): LevelEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
