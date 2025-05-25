import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { DayService } from '../../service/day.service';

@Injectable()
export class DeleteDayUsecase implements UseCase<number, { message: string }> {
  constructor(private readonly service: DayService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkDataExistence(input);
    if (!isExist) {
      throw new NotFoundException('Day does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
