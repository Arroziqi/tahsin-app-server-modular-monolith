import { Module } from '@nestjs/common';
import { ENROLLMENT_REPO_TOKEN } from '../../../common/constants/provider.token';
import { GetEnrollmentUsecase } from '../application/usecase/enrollment/get-enrollment.usecase';
import { EnrollmentRepositoryPersistence } from '../infrastructure/persistence/enrollment-repository.persistence';
import { EnrollmentService } from '../application/service/enrollment.service';
import { GetAllEnrollmentUsecase } from '../application/usecase/enrollment/get-all-enrollment.usecase';
import { UpdateEnrollmentUsecase } from '../application/usecase/enrollment/update-enrollment.usecase';
import { CreateEnrollmentUsecase } from '../application/usecase/enrollment/create-enrollment.usecase';
import { DeleteEnrollmentUsecase } from '../application/usecase/enrollment/delete-enrollment.usecase';
import { EnrollmentController } from '../presentation/rest/controller/enrollment.controller';

@Module({
  providers: [
    {
      provide: ENROLLMENT_REPO_TOKEN,
      useClass: EnrollmentRepositoryPersistence,
    },
    EnrollmentService,
    GetEnrollmentUsecase,
    GetAllEnrollmentUsecase,
    UpdateEnrollmentUsecase,
    CreateEnrollmentUsecase,
    DeleteEnrollmentUsecase,
  ],
  controllers: [EnrollmentController],
  exports: [
    EnrollmentService,
    {
      provide: ENROLLMENT_REPO_TOKEN,
      useClass: EnrollmentRepositoryPersistence,
    },
  ],
})
export class EnrollmentModule {}
