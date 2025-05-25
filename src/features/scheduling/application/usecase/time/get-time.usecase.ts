import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TimeEntity } from '../../../domain/entities/time.entity';
import { TimeService } from '../../service/time.service';

@Injectable()
export class GetTimeUsecase implements UseCase<number, TimeEntity | null> {
  constructor(private readonly service: TimeService) {}

  async execute(id: number): Promise<TimeEntity | null> {
    return await this.service.getTime(id);
  }
}
