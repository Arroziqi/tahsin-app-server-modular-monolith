import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { BankAccountService } from '../../service/bank-account.service';
import { BankAccountEntity } from '../../../domain/entities/bank-account.entity';

@Injectable()
export class GetAllBankAccountUsecase
  implements UseCase<void, BankAccountEntity[] | null>
{
  constructor(private readonly service: BankAccountService) {}

  async execute(input: void): Promise<BankAccountEntity[] | null> {
    return await this.service.getAll();
  }
}
