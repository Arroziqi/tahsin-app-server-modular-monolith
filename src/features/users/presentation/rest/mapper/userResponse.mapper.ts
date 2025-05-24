import { UserEntity } from '../../../domain/entities/user.entity';

export class UserResponseMapper {
  static toDto(entity: UserEntity): unknown {
    return {
      id: entity.id,
      username: entity.username,
      email: entity.email,
    };
  }

  static toDtoList(entities: UserEntity[]): unknown {
    return entities.map((entity) => this.toDto(entity));
  }

  static exceptPassword(entity: UserEntity): unknown {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = entity;
    return rest;
  }
}
