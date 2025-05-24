import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../common/types/usecase';
import { UserEntity } from '../../../users/domain/entities/user.entity';
import { AuthService } from '../service/auth.service';

@Injectable()
export class RegisterUsecase implements UseCase<UserEntity, UserEntity> {
  constructor(private readonly service: AuthService) {}

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
