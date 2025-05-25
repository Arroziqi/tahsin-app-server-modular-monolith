import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { DayService } from '../../service/day.service';
import { DayEntity } from '../../../domain/entities/day.entity';

@Injectable()
export class GetDayUsecase implements UseCase<number, DayEntity | null> {
  constructor(private readonly service: DayService) {}

  async execute(id: number): Promise<DayEntity | null> {
    return await this.service.getDay(id);
  }
}
