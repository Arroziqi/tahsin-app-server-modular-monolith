import { Module } from '@nestjs/common';
import { TIME_REPO_TOKEN } from '../../../common/constants/provider.token';
import { TimeRepositoryPersistence } from '../infrastructure/persistence/time-repository.persistence';
import { TimeService } from '../application/service/time.service';
import { GetTimeUsecase } from '../application/usecase/time/get-time.usecase';
import { GetAllTimeUsecase } from '../application/usecase/time/get-all-time.usecase';
import { UpdateTimeUsecase } from '../application/usecase/time/update-time.usecase';
import { CreateTimeUsecase } from '../application/usecase/time/create-time.usecase';
import { DeleteTimeUsecase } from '../application/usecase/time/delete-time.usecase';
import { TimeController } from '../presentation/rest/controller/time.controller';

@Module({
  providers: [
    {
      provide: TIME_REPO_TOKEN,
      useClass: TimeRepositoryPersistence,
    },
    TimeService,
    GetTimeUsecase,
    GetAllTimeUsecase,
    UpdateTimeUsecase,
    CreateTimeUsecase,
    DeleteTimeUsecase,
  ],
  controllers: [TimeController],
  exports: [
    TimeService,
    {
      provide: TIME_REPO_TOKEN,
      useClass: TimeRepositoryPersistence,
    },
  ],
})
export class TimeModule {}
