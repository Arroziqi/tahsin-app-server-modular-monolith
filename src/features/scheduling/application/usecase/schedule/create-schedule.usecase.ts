import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ScheduleService } from '../../service/schedule.service';
import { ScheduleEntity } from '../../../domain/entities/schedule.entity';

@Injectable()
export class CreateScheduleUsecase
  implements UseCase<ScheduleEntity, ScheduleEntity>
{
  constructor(private readonly service: ScheduleService) {}

  async execute(input: ScheduleEntity): Promise<ScheduleEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('Schedule already exists');
    }

    return this.service.create(input);
  }
}
