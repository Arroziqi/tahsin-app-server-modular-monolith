import { Global, Module } from '@nestjs/common';
import { PrismaService } from './services/database/prisma.service';
import { HasherService } from './services/crypto/hasher.service';
import { TimeService } from './utils/time.service';
import { AppLoggerModule } from './services/logger/appLogger.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

@Global()
@Module({
  imports: [AppLoggerModule],
  providers: [
    PrismaService,
    HasherService,
    TimeService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
  exports: [PrismaService, HasherService, TimeService],
})
export class CommonModule {}
