import { Module } from '@nestjs/common';
import { STUDENT_REPO_TOKEN } from '../../../common/constants/provider.token';
import { StudentRepositoryAdapter } from '../infrastructure/persistence/student-repository.persistence';
import { StudentService } from '../application/service/student.service';
import { GetStudentUsecase } from '../application/usecase/student/get-student.usecase';
import { GetAllStudentUsecase } from '../application/usecase/student/get-all-student.usecase';
import { UpdateStudentUsecase } from '../application/usecase/student/update-student.usecase';
import { CreateStudentUsecase } from '../application/usecase/student/create-student.usecase';
import { DeleteStudentUsecase } from '../application/usecase/student/delete-student.usecase';
import { StudentController } from '../presentation/rest/controller/student.controller';

@Module({
  providers: [
    {
      provide: STUDENT_REPO_TOKEN,
      useClass: StudentRepositoryAdapter,
    },
    StudentService,
    GetStudentUsecase,
    GetAllStudentUsecase,
    UpdateStudentUsecase,
    CreateStudentUsecase,
    DeleteStudentUsecase,
  ],
  controllers: [StudentController],
  exports: [
    StudentService,
    {
      provide: STUDENT_REPO_TOKEN,
      useClass: StudentRepositoryAdapter,
    },
  ],
})
export class StudentModule {}
