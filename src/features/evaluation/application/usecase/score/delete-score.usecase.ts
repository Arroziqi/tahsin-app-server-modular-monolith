import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ScoreService } from '../../service/score.service';

@Injectable()
export class DeleteScoreUsecase
  implements UseCase<number, { message: string }>
{
  constructor(private readonly service: ScoreService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkDataExistence(input);
    if (!isExist) {
      throw new NotFoundException('Score does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
