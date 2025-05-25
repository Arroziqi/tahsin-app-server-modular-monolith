import { Score } from '@prisma/client';
import { ScoreEntity } from '../../domain/entities/score.entity';

export class ScoreMapper {
  static toEntity(raw: Score): ScoreEntity {
    return new ScoreEntity({
      id: raw.id,
      value: raw.value,
      studentId: raw.studentId,
      taskId: raw.taskId,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: Score[]): ScoreEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
