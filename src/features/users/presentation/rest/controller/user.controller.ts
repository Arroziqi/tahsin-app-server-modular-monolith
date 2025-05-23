import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BASE_PATH } from '../../../../../common/constants/cons';
import { CreateUserUsecase } from '../../../application/usecase/user/createUser.usecase';
import { GetAllUserUsecase } from '../../../application/usecase/user/getAllUser.usecase';
import { UpdateUserUsecase } from '../../../application/usecase/user/updateUser.usecase';
import { DeleteUserUsecase } from 'src/features/users/application/usecase/user/deleteUser.usecase';
import { GetUserUsecase } from '../../../application/usecase/user/getUser.usecase';
import { CreateUserDto } from '../dto/user/createUser.dto';
import { UpdateUserDto } from '../dto/user/updateUser.dto';

@Controller(`${BASE_PATH}/user`)
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUsecase,
    private readonly getAllUserUseCase: GetAllUserUsecase,
    private readonly getUserUseCase: GetUserUsecase,
    private readonly updateUserUseCase: UpdateUserUsecase,
    private readonly deleteUserUseCase: DeleteUserUsecase,
  ) {}

  @Post('/create')
  create(@Body() req: CreateUserDto) {
    return this.createUserUseCase.execute(req);
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
  update(@Body() req: UpdateUserDto) {
    return this.updateUserUseCase.execute(req);
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteUserUseCase.execute(id);
  }
}
