import { Module } from '@nestjs/common';
import { USER_REPO_TOKEN } from '../../../common/constants/provider.token';
import { UserRepositoryAdapter } from '../infrastructure/adapters/userRepository.adapter';
import { UserService } from '../application/service/user.service';
import { GetUserUsecase } from '../application/usecase/user/getUser.usecase';
import { GetAllUserUsecase } from '../application/usecase/user/getAllUser.usecase';
import { UpdateUserUsecase } from '../application/usecase/user/updateUser.usecase';
import { CreateUserUsecase } from '../application/usecase/user/createUser.usecase';
import { DeleteUserUsecase } from '../application/usecase/user/deleteUser.usecase';
import { UserController } from '../presentation/rest/controller/user.controller';

@Module({
  providers: [
    {
      provide: USER_REPO_TOKEN,
      useClass: UserRepositoryAdapter,
    },
    UserService,
    GetUserUsecase,
    GetAllUserUsecase,
    UpdateUserUsecase,
    CreateUserUsecase,
    DeleteUserUsecase,
  ],
  controllers: [UserController],
  exports: [
    UserService,
    {
      provide: USER_REPO_TOKEN,
      useClass: UserRepositoryAdapter,
    },
  ],
})
export class UserModule {}
