import { Module } from '@nestjs/common';
import { ATTENDANCE_REPO_TOKEN } from '../../../common/constants/provider.token';
import { AttendanceRepositoryPersistence } from '../infrastructure/persistence/attendance-repository.persistence';
import { AttendanceService } from '../application/service/attendance.service';
import { GetAttendanceUsecase } from '../application/usecase/attendance/get-attendance.usecase';
import { GetAllAttendanceUsecase } from '../application/usecase/attendance/get-all-attendance.usecase';
import { UpdateAttendanceUsecase } from '../application/usecase/attendance/update-attendance.usecase';
import { CreateAttendanceUsecase } from '../application/usecase/attendance/create-attendance.usecase';
import { DeleteAttendanceUsecase } from '../application/usecase/attendance/delete-attendance.usecase';
import { AttendanceController } from '../presentation/rest/controller/attendance.controller';

@Module({
  providers: [
    {
      provide: ATTENDANCE_REPO_TOKEN,
      useClass: AttendanceRepositoryPersistence,
    },
    AttendanceService,
    GetAttendanceUsecase,
    GetAllAttendanceUsecase,
    UpdateAttendanceUsecase,
    CreateAttendanceUsecase,
    DeleteAttendanceUsecase,
  ],
  controllers: [AttendanceController],
  exports: [
    AttendanceService,
    {
      provide: ATTENDANCE_REPO_TOKEN,
      useClass: AttendanceRepositoryPersistence,
    },
  ],
})
export class AttendanceModule {}
