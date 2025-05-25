import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ScoreEntity } from '../../../domain/entities/score.entity';
import { ScoreService } from '../../service/score.service';

@Injectable()
export class GetAllScoreUsecase implements UseCase<void, ScoreEntity[] | null> {
  constructor(private readonly service: ScoreService) {}

  async execute(input: void): Promise<ScoreEntity[] | null> {
    return await this.service.getAll();
  }
}
