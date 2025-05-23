import { UserEntity } from '../../domain/entities/user.entity';
import { User } from '@prisma/client';

export class UserMapper {
  static toEntity(raw: User): UserEntity {
    return new UserEntity({
      id: raw.id,
      username: raw.username,
      email: raw.email,
      password: raw.password,
      token: raw.token ?? undefined,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: User[]): UserEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
