import { Module } from '@nestjs/common';
import { BANK_ACCOUNT_REPO_TOKEN } from '../../../common/constants/provider.token';
import { BankAccountRepositoryPersistence } from '../infrastructure/persistence/bank-account-repository.persistence';
import { BankAccountService } from '../application/service/bank-account.service';
import { GetBankAccountUsecase } from '../application/usecase/bank-account/get-bank-account.usecase';
import { GetAllBankAccountUsecase } from '../application/usecase/bank-account/get-all-bank-account.usecase';
import { UpdateBankAccountUsecase } from '../application/usecase/bank-account/update-bank-account.usecase';
import { CreateBankAccountUsecase } from '../application/usecase/bank-account/create-bank-account.usecase';
import { DeleteBankAccountUsecase } from '../application/usecase/bank-account/delete-bank-account.usecase';
import { BankAccountController } from '../presentation/rest/controller/bank-account.controller';

@Module({
  providers: [
    {
      provide: BANK_ACCOUNT_REPO_TOKEN,
      useClass: BankAccountRepositoryPersistence,
    },
    BankAccountService,
    GetBankAccountUsecase,
    GetAllBankAccountUsecase,
    UpdateBankAccountUsecase,
    CreateBankAccountUsecase,
    DeleteBankAccountUsecase,
  ],
  controllers: [BankAccountController],
  exports: [
    BankAccountService,
    {
      provide: BANK_ACCOUNT_REPO_TOKEN,
      useClass: BankAccountRepositoryPersistence,
    },
  ],
})
export class BankAccountModule {}
