import { Teacher } from '@prisma/client';
import { TeacherEntity } from '../../domain/entities/teacher.entity';

export class TeacherMapper {
  static toEntity(raw: Teacher): TeacherEntity {
    return new TeacherEntity({
      id: raw.id,
      fullName: raw.fullName,
      nip: raw.nip,
      accountNumber: raw.accountNumber ?? undefined,
      accountName: raw.accountName ?? undefined,
      bankName: raw.bankName ?? undefined,
      userId: raw.userId,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: Teacher[]): TeacherEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
