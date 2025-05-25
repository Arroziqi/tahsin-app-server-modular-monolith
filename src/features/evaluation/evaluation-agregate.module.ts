import { Module } from '@nestjs/common';
import { LevelModule } from './module/level.module';
import { StudentStatusModule } from './module/student-status.module';
import { ScoreModule } from './module/score.module';

@Module({
  imports: [LevelModule, StudentStatusModule, ScoreModule],
})
export class EvaluationAgregateModule {}
