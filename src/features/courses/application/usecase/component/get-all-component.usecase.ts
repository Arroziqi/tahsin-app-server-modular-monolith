import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ComponentService } from '../../service/component.service';
import { ComponentEntity } from '../../../domain/entities/component.entity';

@Injectable()
export class GetAllComponentUsecase
  implements UseCase<void, ComponentEntity[] | null>
{
  constructor(private readonly service: ComponentService) {}

  async execute(input: void): Promise<ComponentEntity[] | null> {
    return await this.service.getAll();
  }
}
