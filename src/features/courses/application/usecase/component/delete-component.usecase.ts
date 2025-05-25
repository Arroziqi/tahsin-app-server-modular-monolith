import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ComponentService } from '../../service/component.service';

@Injectable()
export class DeleteComponentUsecase
  implements UseCase<number, { message: string }>
{
  constructor(private readonly service: ComponentService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkDataExistence(input);
    if (!isExist) {
      throw new NotFoundException('Component does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
