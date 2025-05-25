import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ClassEntity } from '../../../domain/entities/class.entity';
import { ClassService } from '../../service/class.service';

@Injectable()
export class UpdateClassUsecase
  implements UseCase<Partial<ClassEntity>, ClassEntity>
{
  constructor(private readonly service: ClassService) {}

  async execute(input: Partial<ClassEntity>): Promise<ClassEntity> {
    const isExist: boolean = await this.service.checkDataExistence(input.id!);
    if (!isExist) {
      throw new GoneException('Class does not exist');
    }

    return this.service.update(input);
  }
}
