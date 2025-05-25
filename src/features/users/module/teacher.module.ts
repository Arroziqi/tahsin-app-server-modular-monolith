import { Module } from '@nestjs/common';
import { TEACHER_REPO_TOKEN } from '../../../common/constants/provider.token';
import { TeacherRepositoryAdapter } from '../infrastructure/persistence/teacher-repository.persistence';
import { TeacherService } from '../application/service/teacher.service';
import { GetTeacherUsecase } from '../application/usecase/teacher/get-teacher.usecase';
import { GetAllTeacherUsecase } from '../application/usecase/teacher/get-all-teacher.usecase';
import { UpdateTeacherUsecase } from '../application/usecase/teacher/update-teacher.usecase';
import { CreateTeacherUsecase } from '../application/usecase/teacher/create-teacher.usecase';
import { DeleteTeacherUsecase } from '../application/usecase/teacher/delete-teacher.usecase';
import { TeacherController } from '../presentation/rest/controller/teacher.controller';

@Module({
  providers: [
    {
      provide: TEACHER_REPO_TOKEN,
      useClass: TeacherRepositoryAdapter,
    },
    TeacherService,
    GetTeacherUsecase,
    GetAllTeacherUsecase,
    UpdateTeacherUsecase,
    CreateTeacherUsecase,
    DeleteTeacherUsecase,
  ],
  controllers: [TeacherController],
  exports: [
    TeacherService,
    {
      provide: TEACHER_REPO_TOKEN,
      useClass: TeacherRepositoryAdapter,
    },
  ],
})
export class TeacherModule {}
