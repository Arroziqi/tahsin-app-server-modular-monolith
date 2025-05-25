import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TransactionEntity } from '../../../domain/entities/transaction.entity';
import { TransactionService } from '../../service/transaction.service';

@Injectable()
export class GetAllTransactionUsecase
  implements UseCase<void, TransactionEntity[] | null>
{
  constructor(private readonly service: TransactionService) {}

  async execute(input: void): Promise<TransactionEntity[] | null> {
    return await this.service.getAll();
  }
}
