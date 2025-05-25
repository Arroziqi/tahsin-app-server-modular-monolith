import { Module } from '@nestjs/common';
import { ADMIN_REPO_TOKEN } from '../../../common/constants/provider.token';
import { AdminRepositoryAdapter } from '../infrastructure/persistence/admin-repository.persistence';
import { AdminService } from '../application/service/admin.service';
import { GetAdminUsecase } from '../application/usecase/admin/get-admin.usecase';
import { GetAllAdminUsecase } from '../application/usecase/admin/get-all-admin.usecase';
import { UpdateAdminUsecase } from '../application/usecase/admin/update-admin.usecase';
import { CreateAdminUsecase } from '../application/usecase/admin/create-admin.usecase';
import { DeleteAdminUsecase } from '../application/usecase/admin/delete-admin.usecase';
import { AdminController } from '../presentation/rest/controller/admin.controller';

@Module({
  providers: [
    {
      provide: ADMIN_REPO_TOKEN,
      useClass: AdminRepositoryAdapter,
    },
    AdminService,
    GetAdminUsecase,
    GetAllAdminUsecase,
    UpdateAdminUsecase,
    CreateAdminUsecase,
    DeleteAdminUsecase,
  ],
  controllers: [AdminController],
  exports: [
    AdminService,
    {
      provide: ADMIN_REPO_TOKEN,
      useClass: AdminRepositoryAdapter,
    },
  ],
})
export class AdminModule {}
