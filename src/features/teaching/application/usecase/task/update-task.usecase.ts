import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TaskEntity } from '../../../domain/entities/task.entity';
import { TaskService } from '../../service/task.service';

@Injectable()
export class UpdateTaskUsecase
  implements UseCase<Partial<TaskEntity>, TaskEntity>
{
  constructor(private readonly service: TaskService) {}

  async execute(input: Partial<TaskEntity>): Promise<TaskEntity> {
    const isExist: boolean = await this.service.checkDataExistence(input.id!);
    if (!isExist) {
      throw new GoneException('Task does not exist');
    }

    return this.service.update(input);
  }
}
