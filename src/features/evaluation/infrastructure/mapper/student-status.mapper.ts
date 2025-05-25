import { StudentStatus } from '@prisma/client';
import { StudentStatusEntity } from '../../domain/entities/student-status.entity';

export class StudentStatusMapper {
  static toEntity(raw: StudentStatus): StudentStatusEntity {
    return new StudentStatusEntity({
      id: raw.id,
      status: raw.status,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: StudentStatus[]): StudentStatusEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
