import { Module } from '@nestjs/common';
import { TASK_REPO_TOKEN } from '../../../common/constants/provider.token';
import { TaskRepositoryPersistence } from '../infrastructure/persistence/task-repository.persistence';
import { TaskService } from '../application/service/task.service';
import { GetTaskUsecase } from '../application/usecase/task/get-task.usecase';
import { GetAllTaskUsecase } from '../application/usecase/task/get-all-task.usecase';
import { UpdateTaskUsecase } from '../application/usecase/task/update-task.usecase';
import { CreateTaskUsecase } from '../application/usecase/task/create-task.usecase';
import { DeleteTaskUsecase } from '../application/usecase/task/delete-task.usecase';
import { TaskController } from '../presentation/rest/controller/task.controller';

@Module({
  providers: [
    {
      provide: TASK_REPO_TOKEN,
      useClass: TaskRepositoryPersistence,
    },
    TaskService,
    GetTaskUsecase,
    GetAllTaskUsecase,
    UpdateTaskUsecase,
    CreateTaskUsecase,
    DeleteTaskUsecase,
  ],
  controllers: [TaskController],
  exports: [
    TaskService,
    {
      provide: TASK_REPO_TOKEN,
      useClass: TaskRepositoryPersistence,
    },
  ],
})
export class TaskModule {}
