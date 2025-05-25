import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TimeEntity } from '../../../domain/entities/time.entity';
import { TimeService } from '../../service/time.service';

@Injectable()
export class GetAllTimeUsecase implements UseCase<void, TimeEntity[] | null> {
  constructor(private readonly service: TimeService) {}

  async execute(input: void): Promise<TimeEntity[] | null> {
    return await this.service.getAll();
  }
}
