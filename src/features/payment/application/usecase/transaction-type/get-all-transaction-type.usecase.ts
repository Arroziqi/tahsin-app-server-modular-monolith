import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TransactionTypeEntity } from '../../../domain/entities/transaction-type.entity';
import { TransactionTypeService } from '../../service/transaction-type.service';

@Injectable()
export class GetAllTransactionTypeUsecase
  implements UseCase<void, TransactionTypeEntity[] | null>
{
  constructor(private readonly service: TransactionTypeService) {}

  async execute(input: void): Promise<TransactionTypeEntity[] | null> {
    return await this.service.getAll();
  }
}
