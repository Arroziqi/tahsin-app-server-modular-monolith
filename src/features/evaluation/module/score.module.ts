import { Module } from '@nestjs/common';
import { SCORE_REPO_TOKEN } from '../../../common/constants/provider.token';
import { ScoreRepositoryPersistence } from '../infrastructure/persistence/score-repository.persistence';
import { ScoreService } from '../application/service/score.service';
import { GetScoreUsecase } from '../application/usecase/score/get-score.usecase';
import { GetAllScoreUsecase } from '../application/usecase/score/get-all-score.usecase';
import { UpdateScoreUsecase } from '../application/usecase/score/update-score.usecase';
import { CreateScoreUsecase } from '../application/usecase/score/create-score.usecase';
import { DeleteScoreUsecase } from '../application/usecase/score/delete-score.usecase';
import { ScoreController } from '../presentation/rest/controller/score.controller';

@Module({
  providers: [
    {
      provide: SCORE_REPO_TOKEN,
      useClass: ScoreRepositoryPersistence,
    },
    ScoreService,
    GetScoreUsecase,
    GetAllScoreUsecase,
    UpdateScoreUsecase,
    CreateScoreUsecase,
    DeleteScoreUsecase,
  ],
  controllers: [ScoreController],
  exports: [
    ScoreService,
    {
      provide: SCORE_REPO_TOKEN,
      useClass: ScoreRepositoryPersistence,
    },
  ],
})
export class ScoreModule {}
