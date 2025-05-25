import { Module } from '@nestjs/common';
import { DAY_REPO_TOKEN } from '../../../common/constants/provider.token';
import { DayRepositoryPersistence } from '../infrastructure/persistence/day-repository.persistence';
import { DayService } from '../application/service/day.service';
import { GetDayUsecase } from '../application/usecase/day/get-day.usecase';
import { GetAllDayUsecase } from '../application/usecase/day/get-all-day.usecase';
import { UpdateDayUsecase } from '../application/usecase/day/update-day.usecase';
import { CreateDayUsecase } from '../application/usecase/day/create-day.usecase';
import { DeleteDayUsecase } from '../application/usecase/day/delete-day.usecase';
import { DayController } from '../presentation/rest/controller/day.controller';

@Module({
  providers: [
    {
      provide: DAY_REPO_TOKEN,
      useClass: DayRepositoryPersistence,
    },
    DayService,
    GetDayUsecase,
    GetAllDayUsecase,
    UpdateDayUsecase,
    CreateDayUsecase,
    DeleteDayUsecase,
  ],
  controllers: [DayController],
  exports: [
    DayService,
    {
      provide: DAY_REPO_TOKEN,
      useClass: DayRepositoryPersistence,
    },
  ],
})
export class DayModule {}
