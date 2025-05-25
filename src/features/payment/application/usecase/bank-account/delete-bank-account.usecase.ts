import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { BankAccountService } from '../../service/bank-account.service';

@Injectable()
export class DeleteBankAccountUsecase
  implements UseCase<number, { message: string }>
{
  constructor(private readonly service: BankAccountService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkBankAccountExistence(input);
    if (!isExist) {
      throw new NotFoundException('BankAccount does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
