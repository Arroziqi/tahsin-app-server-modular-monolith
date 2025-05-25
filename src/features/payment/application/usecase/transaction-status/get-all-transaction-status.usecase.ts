import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TransactionStatusEntity } from '../../../domain/entities/transaction-status.entity';
import { TransactionStatusService } from '../../service/transaction-status.service';

@Injectable()
export class GetAllTransactionStatusUsecase
  implements UseCase<void, TransactionStatusEntity[] | null>
{
  constructor(private readonly service: TransactionStatusService) {}

  async execute(input: void): Promise<TransactionStatusEntity[] | null> {
    return await this.service.getAll();
  }
}
