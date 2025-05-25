import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TransactionTypeEntity } from 'src/features/payment/domain/entities/transaction-type.entity';
import { TransactionTypeService } from '../../service/transaction-type.service';

@Injectable()
export class CreateTransactionTypeUsecase
  implements UseCase<TransactionTypeEntity, TransactionTypeEntity>
{
  constructor(private readonly service: TransactionTypeService) {}

  async execute(input: TransactionTypeEntity): Promise<TransactionTypeEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('TransactionType already exists');
    }

    return this.service.create(input);
  }
}
