import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { LevelEntity } from '../../../domain/entities/level.entity';
import { LevelService } from '../../service/level.service';

@Injectable()
export class GetLevelUsecase implements UseCase<number, LevelEntity | null> {
  constructor(private readonly service: LevelService) {}

  async execute(id: number): Promise<LevelEntity | null> {
    return await this.service.getLevel(id);
  }
}
