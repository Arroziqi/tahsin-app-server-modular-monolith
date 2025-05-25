import { Module } from '@nestjs/common';
import { EnrollmentModule } from './module/enrollment.module';
import { ClassModule } from './module/class.module';
import { BatchModule } from './module/batch.module';

@Module({
  imports: [EnrollmentModule, ClassModule, BatchModule],
})
export class RegistrationAgregateModule {}
