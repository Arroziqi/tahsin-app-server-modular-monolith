import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { DayEntity } from '../../../domain/entities/day.entity';
import { DayService } from '../../service/day.service';

@Injectable()
export class GetAllDayUsecase implements UseCase<void, DayEntity[] | null> {
  constructor(private readonly service: DayService) {}

  async execute(input: void): Promise<DayEntity[] | null> {
    return await this.service.getAll();
  }
}
