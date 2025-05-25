import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TransactionTypeEntity } from '../../../domain/entities/transaction-type.entity';
import { TransactionTypeService } from '../../service/transaction-type.service';

@Injectable()
export class UpdateTransactionTypeUsecase
  implements UseCase<Partial<TransactionTypeEntity>, TransactionTypeEntity>
{
  constructor(private readonly service: TransactionTypeService) {}

  async execute(
    input: Partial<TransactionTypeEntity>,
  ): Promise<TransactionTypeEntity> {
    const isExist: boolean = await this.service.checkTransactionTypeExistence(
      input.id!,
    );
    if (!isExist) {
      throw new GoneException('TransactionType does not exist');
    }

    return this.service.update(input);
  }
}
