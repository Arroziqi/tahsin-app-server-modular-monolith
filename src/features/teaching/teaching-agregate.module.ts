import { Module } from '@nestjs/common';
import { TaskModule } from './module/task.module';
import { AttendanceModule } from './module/attendance.module';

@Module({
  imports: [TaskModule, AttendanceModule],
})
export class TeachingAgregateModule {}
