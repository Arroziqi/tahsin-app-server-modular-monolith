import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { BatchService } from '../../service/batch.service';
import { BatchEntity } from '../../../domain/entities/batch.entity';

@Injectable()
export class CreateBatchUsecase implements UseCase<BatchEntity, BatchEntity> {
  constructor(private readonly service: BatchService) {}

  async execute(input: BatchEntity): Promise<BatchEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('Batch already exists');
    }

    return this.service.create(input);
  }
}
