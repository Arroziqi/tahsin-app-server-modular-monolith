import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { LevelService } from '../../service/level.service';

@Injectable()
export class DeleteLevelUsecase
  implements UseCase<number, { message: string }>
{
  constructor(private readonly service: LevelService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkDataExistence(input);
    if (!isExist) {
      throw new NotFoundException('Level does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
