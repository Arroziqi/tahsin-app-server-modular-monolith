import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ScheduleService } from '../../service/schedule.service';
import { ScheduleEntity } from '../../../domain/entities/schedule.entity';

@Injectable()
export class GetAllScheduleUsecase
  implements UseCase<void, ScheduleEntity[] | null>
{
  constructor(private readonly service: ScheduleService) {}

  async execute(input: void): Promise<ScheduleEntity[] | null> {
    return await this.service.getAll();
  }
}
