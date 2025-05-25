import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { DayEntity } from '../../../domain/entities/day.entity';
import { DayService } from '../../service/day.service';

@Injectable()
export class UpdateDayUsecase
  implements UseCase<Partial<DayEntity>, DayEntity>
{
  constructor(private readonly service: DayService) {}

  async execute(input: Partial<DayEntity>): Promise<DayEntity> {
    const isExist: boolean = await this.service.checkDataExistence(input.id!);
    if (!isExist) {
      throw new GoneException('Day does not exist');
    }

    return this.service.update(input);
  }
}
