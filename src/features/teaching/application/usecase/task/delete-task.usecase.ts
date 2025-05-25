import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TaskService } from '../../service/task.service';

@Injectable()
export class DeleteTaskUsecase implements UseCase<number, { message: string }> {
  constructor(private readonly service: TaskService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkDataExistence(input);
    if (!isExist) {
      throw new NotFoundException('Task does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
