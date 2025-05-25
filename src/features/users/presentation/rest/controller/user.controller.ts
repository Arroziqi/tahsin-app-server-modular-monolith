import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { BASE_PATH } from '../../../../../common/constants/cons';
import { CreateUserUsecase } from '../../../application/usecase/user/createUser.usecase';
import { GetAllUserUsecase } from '../../../application/usecase/user/getAllUser.usecase';
import { UpdateUserUsecase } from '../../../application/usecase/user/updateUser.usecase';
import { DeleteUserUsecase } from 'src/features/users/application/usecase/user/deleteUser.usecase';
import { GetUserUsecase } from '../../../application/usecase/user/getUser.usecase';
import { CreateUserDto } from '../dto/user/createUser.dto';
import { UpdateUserDto } from '../dto/user/updateUser.dto';
import { CreateUserPipe } from '../pipe/user/createUser.pipe';
import { UpdateUserPipe } from '../pipe/user/updateUser.pipe';
import { UserInterceptor } from '../interceptor/user.interceptor';
import { User } from '../../../../../common/decorators/user.decorator';
import { UserEntity } from '../../../domain/entities/user.entity';
import { TokenInterceptor } from '../interceptor/token.interceptor';

@Controller(`${BASE_PATH}/user`)
@UseInterceptors(UserInterceptor, TokenInterceptor)
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUsecase,
    private readonly getAllUserUseCase: GetAllUserUsecase,
    private readonly getUserUseCase: GetUserUsecase,
    private readonly updateUserUseCase: UpdateUserUsecase,
    private readonly deleteUserUseCase: DeleteUserUsecase,
  ) {}

  @Post('/create')
  create(@Body(CreateUserPipe) req: CreateUserDto, @User() user: UserEntity) {
    return this.createUserUseCase.execute({ ...req, createdBy: user.id });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllUserUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getUserUseCase.execute(id);
  }

  @Patch('/update')
  update(@Body(UpdateUserPipe) req: UpdateUserDto, @User() user: UserEntity) {
    return this.updateUserUseCase.execute({ ...req, updatedBy: user.id });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteUserUseCase.execute(id);
  }
}
