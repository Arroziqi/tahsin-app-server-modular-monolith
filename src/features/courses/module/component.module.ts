import { Module } from '@nestjs/common';
import { COMPONENT_REPO_TOKEN } from '../../../common/constants/provider.token';
import { ComponentRepositoryPersistence } from '../infrastructure/persistence/component-repository.persistence';
import { ComponentService } from '../application/service/component.service';
import { GetComponentUsecase } from '../application/usecase/component/get-component.usecase';
import { GetAllComponentUsecase } from '../application/usecase/component/get-all-component.usecase';
import { UpdateComponentUsecase } from '../application/usecase/component/update-component.usecase';
import { CreateComponentUsecase } from '../application/usecase/component/create-component.usecase';
import { DeleteComponentUsecase } from '../application/usecase/component/delete-component.usecase';
import { ComponentController } from '../presentation/rest/controller/component.controller';

@Module({
  providers: [
    {
      provide: COMPONENT_REPO_TOKEN,
      useClass: ComponentRepositoryPersistence,
    },
    ComponentService,
    GetComponentUsecase,
    GetAllComponentUsecase,
    UpdateComponentUsecase,
    CreateComponentUsecase,
    DeleteComponentUsecase,
  ],
  controllers: [ComponentController],
  exports: [
    ComponentService,
    {
      provide: COMPONENT_REPO_TOKEN,
      useClass: ComponentRepositoryPersistence,
    },
  ],
})
export class ComponentModule {}
