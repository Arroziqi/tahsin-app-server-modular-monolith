import { Module } from '@nestjs/common';
import { ModuleModule } from './module/module.module';
import { ComponentModule } from './module/component.module';

@Module({
  imports: [ModuleModule, ComponentModule],
})
export class CoursesAgregateModule {}
