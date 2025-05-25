import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/presentation/rest/guards/auth.guard';
import { UsersAgregateModule } from './users/users-agregate.module';
import { PaymentAgregateModule } from './payment/payment-agregate.module';
import { EvaluationAgregateModule } from './evaluation/evaluation-agregate.module';
import { SchedulingAgregateModule } from './scheduling/scheduling-agregate.module';
import { TeachingAgregateModule } from './teaching/teaching-agregate.module';
import { RegistrationAgregateModule } from './registration/registration-agregate.module';
import { CoursesAgregateModule } from './courses/courses-agregate.module';

@Module({
  imports: [
    UsersAgregateModule,
    AuthModule,
    PaymentAgregateModule,
    EvaluationAgregateModule,
    SchedulingAgregateModule,
    TeachingAgregateModule,
    RegistrationAgregateModule,
    CoursesAgregateModule,
  ],
  controllers: [],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: AuthGuard,
    },
  ],
})
export class FeaturesModule {}
