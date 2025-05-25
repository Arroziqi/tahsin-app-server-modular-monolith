import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ScheduleEntity } from '../../../domain/entities/schedule.entity';
import { ScheduleService } from '../../service/schedule.service';

@Injectable()
export class UpdateScheduleUsecase
  implements UseCase<Partial<ScheduleEntity>, ScheduleEntity>
{
  constructor(private readonly service: ScheduleService) {}

  async execute(input: Partial<ScheduleEntity>): Promise<ScheduleEntity> {
    const isExist: boolean = await this.service.checkDataExistence(input.id!);
    if (!isExist) {
      throw new GoneException('Schedule does not exist');
    }

    return this.service.update(input);
  }
}
