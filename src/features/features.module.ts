import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/presentation/rest/guards/auth.guard';
import { UsersAgregateModule } from './users/users-agregate.module';
import { PaymentAgregateModule } from './payment/payment-agregate.module';

@Module({
  imports: [UsersAgregateModule, AuthModule, PaymentAgregateModule],
  controllers: [],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: AuthGuard,
    },
  ],
})
export class FeaturesModule {}
