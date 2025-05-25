import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { BatchEntity } from '../../../domain/entities/batch.entity';
import { BatchService } from '../../service/batch.service';

@Injectable()
export class UpdateBatchUsecase
  implements UseCase<Partial<BatchEntity>, BatchEntity>
{
  constructor(private readonly service: BatchService) {}

  async execute(input: Partial<BatchEntity>): Promise<BatchEntity> {
    const isExist: boolean = await this.service.checkDataExistence(input.id!);
    if (!isExist) {
      throw new GoneException('Batch does not exist');
    }

    return this.service.update(input);
  }
}
