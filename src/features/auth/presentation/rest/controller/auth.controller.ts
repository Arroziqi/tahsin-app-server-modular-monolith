import {
  Body,
  Controller,
  Delete,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UserInterceptor } from '../../../../users/presentation/rest/interceptor/user.interceptor';
import { LoginUsecase } from '../../../application/usecase/login.usecase';
import { RegisterUsecase } from '../../../application/usecase/register.usecase';
import { LoginPipe } from '../pipe/login.pipe';
import { LoginDto } from '../dto/login.dto';
import { RegisterPipe } from '../pipe/register.pipe';
import { RegisterDto } from '../dto/register.dto';
import { LogoutUsecase } from 'src/features/auth/application/usecase/logout.usecase';
import { UserEntity } from '../../../../users/domain/entities/user.entity';
import { BASE_PATH } from '../../../../../common/constants/cons';
import { Public } from 'src/common/decorators/public.decorator';
import { User } from '../../../../../common/decorators/user.decorator';

@Controller(`${BASE_PATH}`)
@UseInterceptors(UserInterceptor)
export class AuthController {
  constructor(
    private readonly loginUsecase: LoginUsecase,
    private readonly registerUsecase: RegisterUsecase,
    private readonly logoutUsecase: LogoutUsecase,
  ) {}

  @Public()
  @Post('/login')
  login(@Body(LoginPipe) req: LoginDto) {
    return this.loginUsecase.execute(req);
  }

  @Public()
  @Post('/register')
  register(@Body(RegisterPipe) req: RegisterDto) {
    return this.registerUsecase.execute(req);
  }

  @Delete('/logout')
  logout(@User() req: Partial<UserEntity>) {
    return this.logoutUsecase.execute(req);
  }
}
