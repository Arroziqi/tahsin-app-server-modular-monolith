import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TimeEntity } from '../../../domain/entities/time.entity';
import { TimeService } from '../../service/time.service';

@Injectable()
export class UpdateTimeUsecase
  implements UseCase<Partial<TimeEntity>, TimeEntity>
{
  constructor(private readonly service: TimeService) {}

  async execute(input: Partial<TimeEntity>): Promise<TimeEntity> {
    const isExist: boolean = await this.service.checkDataExistence(input.id!);
    if (!isExist) {
      throw new GoneException('Time does not exist');
    }

    return this.service.update(input);
  }
}
