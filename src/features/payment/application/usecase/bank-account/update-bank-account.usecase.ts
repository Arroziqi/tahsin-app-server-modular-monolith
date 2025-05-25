import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { BankAccountEntity } from '../../../domain/entities/bank-account.entity';
import { BankAccountService } from '../../service/bank-account.service';

@Injectable()
export class UpdateBankAccountUsecase
  implements UseCase<Partial<BankAccountEntity>, BankAccountEntity>
{
  constructor(private readonly service: BankAccountService) {}

  async execute(input: Partial<BankAccountEntity>): Promise<BankAccountEntity> {
    const isExist: boolean = await this.service.checkBankAccountExistence(
      input.id!,
    );
    if (!isExist) {
      throw new GoneException('BankAccount does not exist');
    }

    return this.service.update(input);
  }
}
