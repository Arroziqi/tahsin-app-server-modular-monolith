import { Module } from '@nestjs/common';
import { CLASS_REPO_TOKEN } from '../../../common/constants/provider.token';
import { ClassRepositoryPersistence } from '../infrastructure/persistence/class-repository.persistence';
import { ClassService } from '../application/service/class.service';
import { GetClassUsecase } from '../application/usecase/class/get-class.usecase';
import { GetAllClassUsecase } from '../application/usecase/class/get-all-class.usecase';
import { UpdateClassUsecase } from '../application/usecase/class/update-class.usecase';
import { CreateClassUsecase } from '../application/usecase/class/create-class.usecase';
import { DeleteClassUsecase } from '../application/usecase/class/delete-class.usecase';
import { ClassController } from '../presentation/rest/controller/class.controller';

@Module({
  providers: [
    {
      provide: CLASS_REPO_TOKEN,
      useClass: ClassRepositoryPersistence,
    },
    ClassService,
    GetClassUsecase,
    GetAllClassUsecase,
    UpdateClassUsecase,
    CreateClassUsecase,
    DeleteClassUsecase,
  ],
  controllers: [ClassController],
  exports: [
    ClassService,
    {
      provide: CLASS_REPO_TOKEN,
      useClass: ClassRepositoryPersistence,
    },
  ],
})
export class ClassModule {}
