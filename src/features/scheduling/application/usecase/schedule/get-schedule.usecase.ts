import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ScheduleService } from '../../service/schedule.service';
import { ScheduleEntity } from '../../../domain/entities/schedule.entity';

@Injectable()
export class GetScheduleUsecase
  implements UseCase<number, ScheduleEntity | null>
{
  constructor(private readonly service: ScheduleService) {}

  async execute(id: number): Promise<ScheduleEntity | null> {
    return await this.service.getSchedule(id);
  }
}
