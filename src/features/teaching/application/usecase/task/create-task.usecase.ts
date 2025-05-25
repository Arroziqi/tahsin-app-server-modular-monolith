import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TaskEntity } from 'src/features/teaching/domain/entities/task.entity';
import { TaskService } from '../../service/task.service';

@Injectable()
export class CreateTaskUsecase implements UseCase<TaskEntity, TaskEntity> {
  constructor(private readonly service: TaskService) {}

  async execute(input: TaskEntity): Promise<TaskEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('Task already exists');
    }

    return this.service.create(input);
  }
}
