import { Module } from '@nestjs/common';
import { LEVEL_REPO_TOKEN } from '../../../common/constants/provider.token';
import { LevelRepositoryPersistence } from '../infrastructure/persistence/level-repository.persistence';
import { LevelService } from '../application/service/level.service';
import { GetLevelUsecase } from '../application/usecase/level/get-level.usecase';
import { GetAllLevelUsecase } from '../application/usecase/level/get-all-level.usecase';
import { UpdateLevelUsecase } from '../application/usecase/level/update-level.usecase';
import { CreateLevelUsecase } from '../application/usecase/level/create-level.usecase';
import { DeleteLevelUsecase } from '../application/usecase/level/delete-level.usecase';
import { LevelController } from '../presentation/rest/controller/level.controller';

@Module({
  providers: [
    {
      provide: LEVEL_REPO_TOKEN,
      useClass: LevelRepositoryPersistence,
    },
    LevelService,
    GetLevelUsecase,
    GetAllLevelUsecase,
    UpdateLevelUsecase,
    CreateLevelUsecase,
    DeleteLevelUsecase,
  ],
  controllers: [LevelController],
  exports: [
    LevelService,
    {
      provide: LEVEL_REPO_TOKEN,
      useClass: LevelRepositoryPersistence,
    },
  ],
})
export class LevelModule {}
