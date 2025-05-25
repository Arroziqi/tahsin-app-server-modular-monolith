import { Module } from '@nestjs/common';
import { CLASS_PRICE_REPO_TOKEN } from '../../../common/constants/provider.token';
import { ClassPriceService } from '../application/service/class-price.service';
import { ClassPriceRepositoryPersistence } from '../infrastructure/persistence/class-price-repository.persistence';
import { GetClassPriceUsecase } from '../application/usecase/class-price/get-class-price.usecase';
import { GetAllClassPriceUsecase } from '../application/usecase/class-price/get-all-class-price.usecase';
import { UpdateClassPriceUsecase } from '../application/usecase/class-price/update-class-price.usecase';
import { CreateClassPriceUsecase } from '../application/usecase/class-price/create-class-price.usecase';
import { DeleteClassPriceUsecase } from '../application/usecase/class-price/delete-class-price.usecase';
import { ClassPriceController } from '../presentation/rest/controller/class-price.controller';

@Module({
  providers: [
    {
      provide: CLASS_PRICE_REPO_TOKEN,
      useClass: ClassPriceRepositoryPersistence,
    },
    ClassPriceService,
    GetClassPriceUsecase,
    GetAllClassPriceUsecase,
    UpdateClassPriceUsecase,
    CreateClassPriceUsecase,
    DeleteClassPriceUsecase,
  ],
  controllers: [ClassPriceController],
  exports: [
    ClassPriceService,
    {
      provide: CLASS_PRICE_REPO_TOKEN,
      useClass: ClassPriceRepositoryPersistence,
    },
  ],
})
export class ClassPriceModule {}
