import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TimeEntity } from '../../../domain/entities/time.entity';
import { TimeService } from '../../service/time.service';

@Injectable()
export class CreateTimeUsecase implements UseCase<TimeEntity, TimeEntity> {
  constructor(private readonly service: TimeService) {}

  async execute(input: TimeEntity): Promise<TimeEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('Time already exists');
    }

    return this.service.create(input);
  }
}
