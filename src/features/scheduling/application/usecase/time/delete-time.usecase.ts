import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TimeService } from '../../service/time.service';

@Injectable()
export class DeleteTimeUsecase implements UseCase<number, { message: string }> {
  constructor(private readonly service: TimeService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkDataExistence(input);
    if (!isExist) {
      throw new NotFoundException('Time does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
