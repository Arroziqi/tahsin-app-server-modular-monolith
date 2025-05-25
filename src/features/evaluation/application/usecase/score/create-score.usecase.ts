import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ScoreEntity } from '../../../domain/entities/score.entity';
import { ScoreService } from '../../service/score.service';

@Injectable()
export class CreateScoreUsecase implements UseCase<ScoreEntity, ScoreEntity> {
  constructor(private readonly service: ScoreService) {}

  async execute(input: ScoreEntity): Promise<ScoreEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('Score already exists');
    }

    return this.service.create(input);
  }
}
