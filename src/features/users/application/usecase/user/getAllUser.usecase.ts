import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { UserEntity } from '../../../domain/entities/user.entity';
import { UserService } from '../../../domain/services/user.service';

@Injectable()
export class GetAllUserUsecase implements UseCase<void, UserEntity[] | null> {
  constructor(private readonly service: UserService) {}

  async execute(input: void): Promise<UserEntity[] | null> {
    return await this.service.getAll();
  }
}
