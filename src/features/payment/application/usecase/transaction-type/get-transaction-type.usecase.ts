import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TransactionTypeEntity } from '../../../domain/entities/transaction-type.entity';
import { TransactionTypeService } from '../../service/transaction-type.service';

@Injectable()
export class GetTransactionTypeUsecase
  implements UseCase<number, TransactionTypeEntity | null>
{
  constructor(private readonly service: TransactionTypeService) {}

  async execute(id: number): Promise<TransactionTypeEntity | null> {
    return await this.service.getTransactionType(id);
  }
}
