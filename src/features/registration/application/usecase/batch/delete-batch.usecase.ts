import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { BatchService } from '../../service/batch.service';

@Injectable()
export class DeleteBatchUsecase
  implements UseCase<number, { message: string }>
{
  constructor(private readonly service: BatchService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkDataExistence(input);
    if (!isExist) {
      throw new NotFoundException('Batch does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
