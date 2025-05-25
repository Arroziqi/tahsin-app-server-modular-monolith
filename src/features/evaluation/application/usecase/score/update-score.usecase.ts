import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ScoreEntity } from '../../../domain/entities/score.entity';
import { ScoreService } from '../../service/score.service';

@Injectable()
export class UpdateScoreUsecase
  implements UseCase<Partial<ScoreEntity>, ScoreEntity>
{
  constructor(private readonly service: ScoreService) {}

  async execute(input: Partial<ScoreEntity>): Promise<ScoreEntity> {
    const isExist: boolean = await this.service.checkDataExistence(input.id!);
    if (!isExist) {
      throw new GoneException('Score does not exist');
    }

    return this.service.update(input);
  }
}
