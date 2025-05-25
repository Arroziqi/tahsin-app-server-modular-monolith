import { Admin } from '@prisma/client';
import { AdminEntity } from '../../domain/entities/admin.entity';

export class AdminMapper {
  static toEntity(raw: Admin): AdminEntity {
    return new AdminEntity({
      id: raw.id,
      noAdmin: raw.noAdmin,
      fullName: raw.fullName,
      userId: raw.userId,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: Admin[]): AdminEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
