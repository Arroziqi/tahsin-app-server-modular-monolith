import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ComponentService } from '../../service/component.service';
import { ComponentEntity } from '../../../domain/entities/component.entity';

@Injectable()
export class CreateComponentUsecase
  implements UseCase<ComponentEntity, ComponentEntity>
{
  constructor(private readonly service: ComponentService) {}

  async execute(input: ComponentEntity): Promise<ComponentEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('Component already exists');
    }

    return this.service.create(input);
  }
}
