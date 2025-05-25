import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { BatchService } from '../../service/batch.service';
import { BatchEntity } from '../../../domain/entities/batch.entity';

@Injectable()
export class GetAllBatchUsecase implements UseCase<void, BatchEntity[] | null> {
  constructor(private readonly service: BatchService) {}

  async execute(input: void): Promise<BatchEntity[] | null> {
    return await this.service.getAll();
  }
}
