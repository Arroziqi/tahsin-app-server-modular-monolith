import { Module } from '@nestjs/common';
import { BATCH_REPO_TOKEN } from '../../../common/constants/provider.token';
import { BatchService } from '../application/service/batch.service';
import { BatchRepositoryPersistence } from '../infrastructure/persistence/batch-repository.persistence';
import { GetBatchUsecase } from '../application/usecase/batch/get-batch.usecase';
import { GetAllBatchUsecase } from '../application/usecase/batch/get-all-batch.usecase';
import { UpdateBatchUsecase } from '../application/usecase/batch/update-batch.usecase';
import { CreateBatchUsecase } from '../application/usecase/batch/create-batch.usecase';
import { DeleteBatchUsecase } from '../application/usecase/batch/delete-batch.usecase';
import { BatchController } from '../presentation/rest/controller/batch.controller';

@Module({
  providers: [
    {
      provide: BATCH_REPO_TOKEN,
      useClass: BatchRepositoryPersistence,
    },
    BatchService,
    GetBatchUsecase,
    GetAllBatchUsecase,
    UpdateBatchUsecase,
    CreateBatchUsecase,
    DeleteBatchUsecase,
  ],
  controllers: [BatchController],
  exports: [
    BatchService,
    {
      provide: BATCH_REPO_TOKEN,
      useClass: BatchRepositoryPersistence,
    },
  ],
})
export class BatchModule {}
