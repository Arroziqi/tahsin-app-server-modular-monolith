import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ModuleEntity } from '../../../domain/entities/module.entity';
import { ModuleService } from '../../service/module.service';

@Injectable()
export class GetModuleUsecase implements UseCase<number, ModuleEntity | null> {
  constructor(private readonly service: ModuleService) {}

  async execute(id: number): Promise<ModuleEntity | null> {
    return await this.service.getModule(id);
  }
}
