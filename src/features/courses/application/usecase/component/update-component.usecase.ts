import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ComponentEntity } from '../../../domain/entities/component.entity';
import { ComponentService } from '../../service/component.service';

@Injectable()
export class UpdateComponentUsecase
  implements UseCase<Partial<ComponentEntity>, ComponentEntity>
{
  constructor(private readonly service: ComponentService) {}

  async execute(input: Partial<ComponentEntity>): Promise<ComponentEntity> {
    const isExist: boolean = await this.service.checkDataExistence(input.id!);
    if (!isExist) {
      throw new GoneException('Component does not exist');
    }

    return this.service.update(input);
  }
}
