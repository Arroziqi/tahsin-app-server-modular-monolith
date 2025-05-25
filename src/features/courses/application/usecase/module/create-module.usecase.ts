import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ModuleEntity } from '../../../domain/entities/module.entity';
import { ModuleService } from '../../service/module.service';

@Injectable()
export class CreateModuleUsecase
  implements UseCase<ModuleEntity, ModuleEntity>
{
  constructor(private readonly service: ModuleService) {}

  async execute(input: ModuleEntity): Promise<ModuleEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('Module already exists');
    }

    return this.service.create(input);
  }
}
