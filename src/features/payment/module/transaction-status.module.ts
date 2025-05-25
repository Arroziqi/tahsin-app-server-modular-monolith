import { Module } from '@nestjs/common';
import { TRANSACTION_STATUS_REPO_TOKEN } from '../../../common/constants/provider.token';
import { TransactionStatusRepositoryPersistence } from '../infrastructure/persistence/transaction-status-repository.persistence';
import { TransactionStatusService } from '../application/service/transaction-status.service';
import { GetTransactionStatusUsecase } from '../application/usecase/transaction-status/get-transaction-status.usecase';
import { GetAllTransactionStatusUsecase } from '../application/usecase/transaction-status/get-all-transaction-status.usecase';
import { UpdateTransactionStatusUsecase } from '../application/usecase/transaction-status/update-transaction-status.usecase';
import { CreateTransactionStatusUsecase } from '../application/usecase/transaction-status/create-transaction-status.usecase';
import { DeleteTransactionStatusUsecase } from '../application/usecase/transaction-status/delete-transaction-status.usecase';
import { TransactionStatusController } from '../presentation/rest/controller/transaction-status.controller';

@Module({
  providers: [
    {
      provide: TRANSACTION_STATUS_REPO_TOKEN,
      useClass: TransactionStatusRepositoryPersistence,
    },
    TransactionStatusService,
    GetTransactionStatusUsecase,
    GetAllTransactionStatusUsecase,
    UpdateTransactionStatusUsecase,
    CreateTransactionStatusUsecase,
    DeleteTransactionStatusUsecase,
  ],
  controllers: [TransactionStatusController],
  exports: [
    TransactionStatusService,
    {
      provide: TRANSACTION_STATUS_REPO_TOKEN,
      useClass: TransactionStatusRepositoryPersistence,
    },
  ],
})
export class TransactionStatusModule {}
