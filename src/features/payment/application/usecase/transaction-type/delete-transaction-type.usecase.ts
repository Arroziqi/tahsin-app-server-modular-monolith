import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TransactionTypeService } from '../../service/transaction-type.service';

@Injectable()
export class DeleteTransactionTypeUsecase
  implements UseCase<number, { message: string }>
{
  constructor(private readonly service: TransactionTypeService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkTransactionTypeExistence(input);
    if (!isExist) {
      throw new NotFoundException('TransactionType does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
