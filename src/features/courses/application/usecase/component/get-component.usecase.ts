import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ComponentService } from '../../service/component.service';
import { ComponentEntity } from '../../../domain/entities/component.entity';

@Injectable()
export class GetComponentUsecase
  implements UseCase<number, ComponentEntity | null>
{
  constructor(private readonly service: ComponentService) {}

  async execute(id: number): Promise<ComponentEntity | null> {
    return await this.service.getComponent(id);
  }
}
