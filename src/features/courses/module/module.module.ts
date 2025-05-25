import { Module } from '@nestjs/common';
import { MODULE_REPO_TOKEN } from '../../../common/constants/provider.token';
import { ModuleRepositoryPersistence } from '../infrastructure/persistence/module-repository.persistence';
import { ModuleService } from '../application/service/module.service';
import { GetModuleUsecase } from '../application/usecase/module/get-module.usecase';
import { GetAllModuleUsecase } from '../application/usecase/module/get-all-module.usecase';
import { UpdateModuleUsecase } from '../application/usecase/module/update-module.usecase';
import { CreateModuleUsecase } from '../application/usecase/module/create-module.usecase';
import { DeleteModuleUsecase } from '../application/usecase/module/delete-module.usecase';
import { ModuleController } from '../presentation/rest/controller/module.controller';

@Module({
  providers: [
    {
      provide: MODULE_REPO_TOKEN,
      useClass: ModuleRepositoryPersistence,
    },
    ModuleService,
    GetModuleUsecase,
    GetAllModuleUsecase,
    UpdateModuleUsecase,
    CreateModuleUsecase,
    DeleteModuleUsecase,
  ],
  controllers: [ModuleController],
  exports: [
    ModuleService,
    {
      provide: MODULE_REPO_TOKEN,
      useClass: ModuleRepositoryPersistence,
    },
  ],
})
export class ModuleModule {}
