import { Module } from '@prisma/client';
import { ModuleEntity } from '../../domain/entities/module.entity';

export class ModuleMapper {
  static toEntity(raw: Module): ModuleEntity {
    return new ModuleEntity({
      id: raw.id,
      classId: raw.classId,
      module: raw.module,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: Module[]): ModuleEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
