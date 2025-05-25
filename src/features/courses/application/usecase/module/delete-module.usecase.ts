import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ModuleService } from '../../service/module.service';

@Injectable()
export class DeleteModuleUsecase
  implements UseCase<number, { message: string }>
{
  constructor(private readonly service: ModuleService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkDataExistence(input);
    if (!isExist) {
      throw new NotFoundException('Module does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
