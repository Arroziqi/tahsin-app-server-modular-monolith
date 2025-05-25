import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ModuleEntity } from '../../../domain/entities/module.entity';
import { ModuleService } from '../../service/module.service';

@Injectable()
export class UpdateModuleUsecase
  implements UseCase<Partial<ModuleEntity>, ModuleEntity>
{
  constructor(private readonly service: ModuleService) {}

  async execute(input: Partial<ModuleEntity>): Promise<ModuleEntity> {
    const isExist: boolean = await this.service.checkDataExistence(input.id!);
    if (!isExist) {
      throw new GoneException('Module does not exist');
    }

    return this.service.update(input);
  }
}
