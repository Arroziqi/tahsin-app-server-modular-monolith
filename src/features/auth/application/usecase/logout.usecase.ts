import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../common/types/usecase';
import { AuthService } from '../service/auth.service';
import { UserEntity } from '../../../users/domain/entities/user.entity';

@Injectable()
export class LogoutUsecase
  implements UseCase<Partial<UserEntity>, { message: string }>
{
  constructor(private readonly service: AuthService) {}

  async execute(input: Partial<UserEntity>): Promise<{ message: string }> {
    input.token = '';

    await this.service.update(input);

    return { message: 'OK' };
  }
}
