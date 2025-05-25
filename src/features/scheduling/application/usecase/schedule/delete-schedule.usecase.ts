import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ScheduleService } from '../../service/schedule.service';

@Injectable()
export class DeleteScheduleUsecase
  implements UseCase<number, { message: string }>
{
  constructor(private readonly service: ScheduleService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkDataExistence(input);
    if (!isExist) {
      throw new NotFoundException('Schedule does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
