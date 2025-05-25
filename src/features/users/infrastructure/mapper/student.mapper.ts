import { Student } from '@prisma/client';
import { StudentEntity } from '../../domain/entities/student.entity';

export class StudentMapper {
  static toEntity(raw: Student): StudentEntity {
    return new StudentEntity({
      id: raw.id,
      fullName: raw.fullName,
      motivation: raw.motivation,
      levelId: raw.levelId ?? undefined,
      classId: raw.classId,
      enrollmentId: raw.enrollmentId,
      studentStatusId: raw.studentStatusId ?? undefined,
      userId: raw.userId,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: Student[]): StudentEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
