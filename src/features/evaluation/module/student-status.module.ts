import { Module } from '@nestjs/common';
import { STUDENT_STATUS_REPO_TOKEN } from '../../../common/constants/provider.token';
import { StudentStatusRepositoryPersistence } from '../infrastructure/persistence/student-status-repository.persistence';
import { StudentStatusService } from '../application/service/student-status.service';
import { GetStudentStatusUsecase } from '../application/usecase/student-status/get-student-status.usecase';
import { GetAllStudentStatusUsecase } from '../application/usecase/student-status/get-all-student-status.usecase';
import { UpdateStudentStatusUsecase } from '../application/usecase/student-status/update-student-status.usecase';
import { CreateStudentStatusUsecase } from '../application/usecase/student-status/create-student-status.usecase';
import { DeleteStudentStatusUsecase } from '../application/usecase/student-status/delete-student-status.usecase';
import { StudentStatusController } from '../presentation/rest/controller/student-status.controller';

@Module({
  providers: [
    {
      provide: STUDENT_STATUS_REPO_TOKEN,
      useClass: StudentStatusRepositoryPersistence,
    },
    StudentStatusService,
    GetStudentStatusUsecase,
    GetAllStudentStatusUsecase,
    UpdateStudentStatusUsecase,
    CreateStudentStatusUsecase,
    DeleteStudentStatusUsecase,
  ],
  controllers: [StudentStatusController],
  exports: [
    StudentStatusService,
    {
      provide: STUDENT_STATUS_REPO_TOKEN,
      useClass: StudentStatusRepositoryPersistence,
    },
  ],
})
export class StudentStatusModule {}
