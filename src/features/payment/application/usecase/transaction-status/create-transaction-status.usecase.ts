import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TransactionStatusEntity } from '../../../domain/entities/transaction-status.entity';
import { TransactionStatusService } from '../../service/transaction-status.service';

@Injectable()
export class CreateTransactionStatusUsecase
  implements UseCase<TransactionStatusEntity, TransactionStatusEntity>
{
  constructor(private readonly service: TransactionStatusService) {}

  async execute(
    input: TransactionStatusEntity,
  ): Promise<TransactionStatusEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('TransactionStatus already exists');
    }

    return this.service.create(input);
  }
}
