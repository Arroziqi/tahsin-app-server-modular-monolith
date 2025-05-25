import { Module } from '@nestjs/common';
import { SCHEDULE_REPO_TOKEN } from '../../../common/constants/provider.token';
import { ScheduleRepositoryPersistence } from '../infrastructure/persistence/schedule-repository.persistence';
import { ScheduleService } from '../application/service/schedule.service';
import { GetScheduleUsecase } from '../application/usecase/schedule/get-schedule.usecase';
import { GetAllScheduleUsecase } from '../application/usecase/schedule/get-all-schedule.usecase';
import { UpdateScheduleUsecase } from '../application/usecase/schedule/update-schedule.usecase';
import { CreateScheduleUsecase } from '../application/usecase/schedule/create-schedule.usecase';
import { DeleteScheduleUsecase } from '../application/usecase/schedule/delete-schedule.usecase';
import { ScheduleController } from '../presentation/rest/controller/schedule.controller';

@Module({
  providers: [
    {
      provide: SCHEDULE_REPO_TOKEN,
      useClass: ScheduleRepositoryPersistence,
    },
    ScheduleService,
    GetScheduleUsecase,
    GetAllScheduleUsecase,
    UpdateScheduleUsecase,
    CreateScheduleUsecase,
    DeleteScheduleUsecase,
  ],
  controllers: [ScheduleController],
  exports: [
    ScheduleService,
    {
      provide: SCHEDULE_REPO_TOKEN,
      useClass: ScheduleRepositoryPersistence,
    },
  ],
})
export class ScheduleModule {}
