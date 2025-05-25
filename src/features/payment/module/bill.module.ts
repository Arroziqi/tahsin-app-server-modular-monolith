import { Module } from '@nestjs/common';
import { BILL_REPO_TOKEN } from '../../../common/constants/provider.token';
import { BillRepositoryPersistence } from '../infrastructure/persistence/bill-repository.persistence';
import { BillService } from '../application/service/bill.service';
import { GetBillUsecase } from '../application/usecase/bill/get-bill.usecase';
import { GetAllBillUsecase } from '../application/usecase/bill/get-all-bill.usecase';
import { UpdateBillUsecase } from '../application/usecase/bill/update-bill.usecase';
import { CreateBillUsecase } from '../application/usecase/bill/create-bill.usecase';
import { DeleteBillUsecase } from '../application/usecase/bill/delete-bill.usecase';
import { BillController } from '../presentation/rest/controller/bill.controller';

@Module({
  providers: [
    {
      provide: BILL_REPO_TOKEN,
      useClass: BillRepositoryPersistence,
    },
    BillService,
    GetBillUsecase,
    GetAllBillUsecase,
    UpdateBillUsecase,
    CreateBillUsecase,
    DeleteBillUsecase,
  ],
  controllers: [BillController],
  exports: [
    BillService,
    {
      provide: BILL_REPO_TOKEN,
      useClass: BillRepositoryPersistence,
    },
  ],
})
export class BillModule {}
