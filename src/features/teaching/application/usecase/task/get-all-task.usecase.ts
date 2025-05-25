import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TaskService } from '../../service/task.service';
import { TaskEntity } from '../../../domain/entities/task.entity';

@Injectable()
export class GetAllTaskUsecase implements UseCase<void, TaskEntity[] | null> {
  constructor(private readonly service: TaskService) {}

  async execute(input: void): Promise<TaskEntity[] | null> {
    return await this.service.getAll();
  }
}
