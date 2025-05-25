import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TransactionEntity } from '../../../domain/entities/transaction.entity';
import { TransactionService } from '../../service/transaction.service';

@Injectable()
export class UpdateTransactionUsecase
  implements UseCase<Partial<TransactionEntity>, TransactionEntity>
{
  constructor(private readonly service: TransactionService) {}

  async execute(input: Partial<TransactionEntity>): Promise<TransactionEntity> {
    const isExist: boolean = await this.service.checkTransactionExistence(
      input.id!,
    );
    if (!isExist) {
      throw new GoneException('Transaction does not exist');
    }

    return this.service.update(input);
  }
}
