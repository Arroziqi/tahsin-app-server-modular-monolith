import { ConflictException, Injectable } from '@nestjs/common';
import { UserService } from '../../../domain/services/user.service';
import { UseCase } from '../../../../../common/types/usecase';
import { UserEntity } from '../../../domain/entities/user.entity';

@Injectable()
export class CreateUserUsecase implements UseCase<UserEntity, UserEntity> {
  constructor(private readonly service: UserService) {}

  async execute(input: UserEntity): Promise<UserEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateUsername(
      input.username,
    );

    if (isDuplicate) {
      throw new ConflictException('Username already exists');
    }

    input.password = await this.service.hashPassword(input.password);

    return this.service.create(input);
  }
}
