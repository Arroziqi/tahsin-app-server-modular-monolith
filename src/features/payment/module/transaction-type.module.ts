import { Module } from '@nestjs/common';
import { TRANSACTION_TYPE_REPO_TOKEN } from '../../../common/constants/provider.token';
import { TransactionTypeRepositoryPersistence } from '../infrastructure/persistence/transaction-type-repository.persistence';
import { GetTransactionTypeUsecase } from '../application/usecase/transaction-type/get-transaction-type.usecase';
import { TransactionTypeService } from '../application/service/transaction-type.service';
import { GetAllTransactionTypeUsecase } from '../application/usecase/transaction-type/get-all-transaction-type.usecase';
import { UpdateTransactionTypeUsecase } from '../application/usecase/transaction-type/update-transaction-type.usecase';
import { CreateTransactionTypeUsecase } from '../application/usecase/transaction-type/create-transaction-type.usecase';
import { DeleteTransactionTypeUsecase } from '../application/usecase/transaction-type/delete-transaction-type.usecase';
import { TransactionTypeController } from '../presentation/rest/controller/transaction-type.controller';

@Module({
  providers: [
    {
      provide: TRANSACTION_TYPE_REPO_TOKEN,
      useClass: TransactionTypeRepositoryPersistence,
    },
    TransactionTypeService,
    GetTransactionTypeUsecase,
    GetAllTransactionTypeUsecase,
    UpdateTransactionTypeUsecase,
    CreateTransactionTypeUsecase,
    DeleteTransactionTypeUsecase,
  ],
  controllers: [TransactionTypeController],
  exports: [
    TransactionTypeService,
    {
      provide: TRANSACTION_TYPE_REPO_TOKEN,
      useClass: TransactionTypeRepositoryPersistence,
    },
  ],
})
export class TransactionTypeModule {}
