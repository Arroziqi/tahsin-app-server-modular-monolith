import { Module } from '@nestjs/common';
import { UserModule } from '../users/module/user.module';
import { AuthController } from './presentation/rest/controller/auth.controller';
import { AuthService } from './application/service/auth.service';
import { LoginUsecase } from './application/usecase/login.usecase';
import { RegisterUsecase } from './application/usecase/register.usecase';
import { LogoutUsecase } from './application/usecase/logout.usecase';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthService, LoginUsecase, RegisterUsecase, LogoutUsecase],
  exports: [AuthService],
})
export class AuthModule {}
