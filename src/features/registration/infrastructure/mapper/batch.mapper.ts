import { Batch } from '@prisma/client';
import { BatchEntity } from '../../domain/entities/batch.entity';

export class BatchMapper {
  static toEntity(raw: Batch): BatchEntity {
    return new BatchEntity({
      id: raw.id,
      year: raw.year,
      batch: raw.batch,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: Batch[]): BatchEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
