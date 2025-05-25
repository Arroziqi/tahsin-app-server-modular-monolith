import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { BankAccountEntity } from '../../../domain/entities/bank-account.entity';
import { BankAccountService } from '../../service/bank-account.service';

@Injectable()
export class CreateBankAccountUsecase
  implements UseCase<BankAccountEntity, BankAccountEntity>
{
  constructor(private readonly service: BankAccountService) {}

  async execute(input: BankAccountEntity): Promise<BankAccountEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('BankAccount already exists');
    }

    return this.service.create(input);
  }
}
