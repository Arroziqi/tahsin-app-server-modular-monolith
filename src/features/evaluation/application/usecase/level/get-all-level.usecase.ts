import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { LevelEntity } from '../../../domain/entities/level.entity';
import { LevelService } from '../../service/level.service';

@Injectable()
export class GetAllLevelUsecase implements UseCase<void, LevelEntity[] | null> {
  constructor(private readonly service: LevelService) {}

  async execute(input: void): Promise<LevelEntity[] | null> {
    return await this.service.getAll();
  }
}
