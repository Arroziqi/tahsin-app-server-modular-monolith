import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { DayEntity } from '../../../domain/entities/day.entity';
import { DayService } from '../../service/day.service';

@Injectable()
export class CreateDayUsecase implements UseCase<DayEntity, DayEntity> {
  constructor(private readonly service: DayService) {}

  async execute(input: DayEntity): Promise<DayEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('Day already exists');
    }

    return this.service.create(input);
  }
}
