import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TransactionEntity } from '../../../domain/entities/transaction.entity';
import { TransactionService } from '../../service/transaction.service';

@Injectable()
export class CreateTransactionUsecase
  implements UseCase<TransactionEntity, TransactionEntity>
{
  constructor(private readonly service: TransactionService) {}

  async execute(input: TransactionEntity): Promise<TransactionEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('Transaction already exists');
    }

    return this.service.create(input);
  }
}
