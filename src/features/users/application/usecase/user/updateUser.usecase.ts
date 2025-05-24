import { ConflictException, GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { UserEntity } from '../../../domain/entities/user.entity';
import { UserService } from '../../service/user.service';

@Injectable()
export class UpdateUserUsecase
  implements UseCase<Partial<UserEntity>, UserEntity>
{
  constructor(private readonly service: UserService) {}

  async execute(input: Partial<UserEntity>): Promise<UserEntity> {
    const isExist: boolean = await this.service.checkUserExistence(input.id!);
    if (!isExist) {
      throw new GoneException('User does not exist');
    }

    if (input.username) {
      const isDuplicate: boolean = await this.service.checkDuplicateUsername(
        input.username,
      );

      if (isDuplicate) {
        throw new ConflictException('Username already exists');
      }
    }

    if (input.password) {
      input.password = await this.service.hashPassword(input.password);
    }

    return this.service.update(input);
  }
}
