import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TransactionEntity } from '../../../domain/entities/transaction.entity';
import { TransactionService } from '../../service/transaction.service';

@Injectable()
export class GetTransactionUsecase
  implements UseCase<number, TransactionEntity | null>
{
  constructor(private readonly service: TransactionService) {}

  async execute(id: number): Promise<TransactionEntity | null> {
    return await this.service.getTransaction(id);
  }
}
