import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { LevelEntity } from '../../../domain/entities/level.entity';
import { LevelService } from '../../service/level.service';

@Injectable()
export class CreateLevelUsecase implements UseCase<LevelEntity, LevelEntity> {
  constructor(private readonly service: LevelService) {}

  async execute(input: LevelEntity): Promise<LevelEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('Level already exists');
    }

    return this.service.create(input);
  }
}
