import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TransactionStatusEntity } from '../../../domain/entities/transaction-status.entity';
import { TransactionStatusService } from '../../service/transaction-status.service';

@Injectable()
export class UpdateTransactionStatusUsecase
  implements UseCase<Partial<TransactionStatusEntity>, TransactionStatusEntity>
{
  constructor(private readonly service: TransactionStatusService) {}

  async execute(
    input: Partial<TransactionStatusEntity>,
  ): Promise<TransactionStatusEntity> {
    const isExist: boolean = await this.service.checkTransactionStatusExistence(
      input.id!,
    );
    if (!isExist) {
      throw new GoneException('TransactionStatus does not exist');
    }

    return this.service.update(input);
  }
}
