import { Module } from '@nestjs/common';
import { TimeModule } from './module/time.module';
import { DayModule } from './module/day.module';
import { ScheduleModule } from './module/schedule.module';

@Module({
  imports: [TimeModule, DayModule, ScheduleModule],
})
export class SchedulingAgregateModule {}
