import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { UserEntity } from '../../../domain/entities/user.entity';
import { UserService } from '../../../domain/services/user.service';

@Injectable()
export class GetUserUsecase implements UseCase<number, UserEntity | null> {
  constructor(private readonly service: UserService) {}

  async execute(id: number): Promise<UserEntity | null> {
    return await this.service.getUser(id);
  }
}
