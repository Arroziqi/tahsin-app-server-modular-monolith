import { Component } from '@prisma/client';
import { ComponentEntity } from '../../domain/entities/component.entity';

export class ComponentMapper {
  static toEntity(raw: Component): ComponentEntity {
    return new ComponentEntity({
      id: raw.id,
      moduleId: raw.moduleId,
      component: raw.component,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: Component[]): ComponentEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
