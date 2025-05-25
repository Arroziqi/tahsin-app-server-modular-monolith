import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TransactionService } from '../../service/transaction.service';

@Injectable()
export class DeleteTransactionUsecase
  implements UseCase<number, { message: string }>
{
  constructor(private readonly service: TransactionService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkTransactionExistence(input);
    if (!isExist) {
      throw new NotFoundException('Transaction does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
