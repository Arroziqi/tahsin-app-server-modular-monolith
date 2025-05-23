import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/appConfig.module';
import { FeaturesModule } from '../features/features.module';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [AppConfigModule, FeaturesModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
