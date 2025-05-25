import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TransactionStatusEntity } from '../../../domain/entities/transaction-status.entity';
import { TransactionStatusService } from '../../service/transaction-status.service';

@Injectable()
export class GetTransactionStatusUsecase
  implements UseCase<number, TransactionStatusEntity | null>
{
  constructor(private readonly service: TransactionStatusService) {}

  async execute(id: number): Promise<TransactionStatusEntity | null> {
    return await this.service.getTransactionStatus(id);
  }
}
