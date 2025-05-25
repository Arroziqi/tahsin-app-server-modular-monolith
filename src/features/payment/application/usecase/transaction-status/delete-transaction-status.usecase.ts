import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TransactionStatusService } from '../../service/transaction-status.service';

@Injectable()
export class DeleteTransactionStatusUsecase
  implements UseCase<number, { message: string }>
{
  constructor(private readonly service: TransactionStatusService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkTransactionStatusExistence(input);
    if (!isExist) {
      throw new NotFoundException('TransactionStatus does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
