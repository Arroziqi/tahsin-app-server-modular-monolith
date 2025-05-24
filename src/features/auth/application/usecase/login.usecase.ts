import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { UseCase } from '../../../../common/types/usecase';
import { UserEntity } from '../../../users/domain/entities/user.entity';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../../../../common/services/crypto/token.service';

@Injectable()
export class LoginUsecase implements UseCase<Partial<UserEntity>, UserEntity> {
  constructor(private readonly service: AuthService) {}

  async execute(input: Partial<UserEntity>): Promise<UserEntity> {
    const existingUser = await this.service.getUser(input.username!);
    if (!existingUser) {
      throw new NotFoundException('invalid credentials');
    }

    const isPasswordVerified = await this.service.verifyPassword(
      input.password!,
      existingUser.password,
    );
    if (!isPasswordVerified) {
      throw new NotAcceptableException('invalid credentials');
    }

    existingUser.token = TokenService.generate();

    return this.service.update(existingUser);
  }
}
