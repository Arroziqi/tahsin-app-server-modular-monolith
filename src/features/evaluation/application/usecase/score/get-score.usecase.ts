import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ScoreService } from '../../service/score.service';
import { ScoreEntity } from '../../../domain/entities/score.entity';

@Injectable()
export class GetScoreUsecase implements UseCase<number, ScoreEntity | null> {
  constructor(private readonly service: ScoreService) {}

  async execute(id: number): Promise<ScoreEntity | null> {
    return await this.service.getScore(id);
  }
}
