import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { BatchService } from '../../service/batch.service';
import { BatchEntity } from '../../../domain/entities/batch.entity';

@Injectable()
export class GetBatchUsecase implements UseCase<number, BatchEntity | null> {
  constructor(private readonly service: BatchService) {}

  async execute(id: number): Promise<BatchEntity | null> {
    return await this.service.getBatch(id);
  }
}
