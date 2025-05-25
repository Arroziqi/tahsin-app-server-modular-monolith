import { Class } from '@prisma/client';
import { ClassEntity } from '../../domain/entities/class.entity';

export class ClassMapper {
  static toEntity(raw: Class): ClassEntity {
    return new ClassEntity({
      id: raw.id,
      batchId: raw.batchId ?? undefined,
      classPriceId: raw.classPriceId,
      class: raw.class,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: Class[]): ClassEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
