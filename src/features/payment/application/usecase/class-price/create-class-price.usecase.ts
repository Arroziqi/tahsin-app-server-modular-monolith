import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ClassPriceEntity } from '../../../domain/entities/class-price.entity';
import { ClassPriceService } from '../../service/class-price.service';

@Injectable()
export class CreateClassPriceUsecase
  implements UseCase<ClassPriceEntity, ClassPriceEntity>
{
  constructor(private readonly service: ClassPriceService) {}

  async execute(input: ClassPriceEntity): Promise<ClassPriceEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('ClassPrice already exists');
    }

    return this.service.create(input);
  }
}
