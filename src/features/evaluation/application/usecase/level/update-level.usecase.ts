import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { LevelEntity } from '../../../domain/entities/level.entity';
import { LevelService } from '../../service/level.service';

@Injectable()
export class UpdateLevelUsecase
  implements UseCase<Partial<LevelEntity>, LevelEntity>
{
  constructor(private readonly service: LevelService) {}

  async execute(input: Partial<LevelEntity>): Promise<LevelEntity> {
    const isExist: boolean = await this.service.checkDataExistence(input.id!);
    if (!isExist) {
      throw new GoneException('Level does not exist');
    }

    return this.service.update(input);
  }
}
