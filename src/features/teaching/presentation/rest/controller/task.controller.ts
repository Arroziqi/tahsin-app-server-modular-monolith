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
import { User } from '../../../../../common/decorators/user.decorator';
import { ValidationPipe } from '../../../../../common/pipes/validation.pipe';
import { CreateTaskUsecase } from '../../../application/usecase/task/create-task.usecase';
import { GetAllTaskUsecase } from '../../../application/usecase/task/get-all-task.usecase';
import { GetTaskUsecase } from '../../../application/usecase/task/get-task.usecase';
import { UpdateTaskUsecase } from '../../../application/usecase/task/update-task.usecase';
import { DeleteTaskUsecase } from '../../../application/usecase/task/delete-task.usecase';
import {
  CreateTaskDto,
  CreateTaskSchema,
} from '../dto-schema/task/create-task.schema';
import { TaskEntity } from '../../../domain/entities/task.entity';
import {
  UpdateTaskDto,
  UpdateTaskSchema,
} from '../dto-schema/task/update-task.schema';

@Controller(`${BASE_PATH}/task`)
export class TaskController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUsecase,
    private readonly getAllTaskUseCase: GetAllTaskUsecase,
    private readonly getTaskUseCase: GetTaskUsecase,
    private readonly updateTaskUseCase: UpdateTaskUsecase,
    private readonly deleteTaskUseCase: DeleteTaskUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateTaskSchema))
    req: CreateTaskDto,
    @User() user: TaskEntity,
  ) {
    return this.createTaskUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllTaskUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getTaskUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateTaskSchema))
    req: UpdateTaskDto,
    @User() user: TaskEntity,
  ) {
    return this.updateTaskUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteTaskUseCase.execute(id);
  }
}
