import { Enrollment } from '@prisma/client';
import { EnrollmentEntity } from '../../domain/entities/enrollment.entity';

export class EnrollmentMapper {
  static toEntity(raw: Enrollment): EnrollmentEntity {
    return new EnrollmentEntity({
      id: raw.id,
      userId: raw.userId,
      classId: raw.classId,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: Enrollment[]): EnrollmentEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
