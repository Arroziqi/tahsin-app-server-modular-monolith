import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TaskService } from '../../service/task.service';
import { TaskEntity } from '../../../domain/entities/task.entity';

@Injectable()
export class GetTaskUsecase implements UseCase<number, TaskEntity | null> {
  constructor(private readonly service: TaskService) {}

  async execute(id: number): Promise<TaskEntity | null> {
    return await this.service.getTask(id);
  }
}
