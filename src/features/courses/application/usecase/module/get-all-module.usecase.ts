import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ModuleEntity } from '../../../domain/entities/module.entity';
import { ModuleService } from '../../service/module.service';

@Injectable()
export class GetAllModuleUsecase
  implements UseCase<void, ModuleEntity[] | null>
{
  constructor(private readonly service: ModuleService) {}

  async execute(input: void): Promise<ModuleEntity[] | null> {
    return await this.service.getAll();
  }
}
