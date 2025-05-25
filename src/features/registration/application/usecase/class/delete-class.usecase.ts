import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ClassService } from '../../service/class.service';

@Injectable()
export class DeleteClassUsecase
  implements UseCase<number, { message: string }>
{
  constructor(private readonly service: ClassService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkDataExistence(input);
    if (!isExist) {
      throw new NotFoundException('Class does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
