import { Module } from '@nestjs/common';
import { TRANSACTION_REPO_TOKEN } from '../../../common/constants/provider.token';
import { TransactionService } from '../application/service/transaction.service';
import { GetTransactionUsecase } from '../application/usecase/transaction/get-transaction.usecase';
import { TransactionRepositoryPersistence } from '../infrastructure/persistence/transaction-repository.persistence';
import { GetAllTransactionUsecase } from '../application/usecase/transaction/get-all-transaction.usecase';
import { UpdateTransactionUsecase } from '../application/usecase/transaction/update-transaction.usecase';
import { CreateTransactionUsecase } from '../application/usecase/transaction/create-transaction.usecase';
import { DeleteTransactionUsecase } from '../application/usecase/transaction/delete-transaction.usecase';
import { TransactionController } from '../presentation/rest/controller/transaction.controller';

@Module({
  providers: [
    {
      provide: TRANSACTION_REPO_TOKEN,
      useClass: TransactionRepositoryPersistence,
    },
    TransactionService,
    GetTransactionUsecase,
    GetAllTransactionUsecase,
    UpdateTransactionUsecase,
    CreateTransactionUsecase,
    DeleteTransactionUsecase,
  ],
  controllers: [TransactionController],
  exports: [
    TransactionService,
    {
      provide: TRANSACTION_REPO_TOKEN,
      useClass: TransactionRepositoryPersistence,
    },
  ],
})
export class TransactionModule {}
