import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ClassPriceEntity } from '../../../domain/entities/class-price.entity';
import { ClassPriceService } from '../../service/class-price.service';

@Injectable()
export class UpdateClassPriceUsecase
  implements UseCase<Partial<ClassPriceEntity>, ClassPriceEntity>
{
  constructor(private readonly service: ClassPriceService) {}

  async execute(input: Partial<ClassPriceEntity>): Promise<ClassPriceEntity> {
    const isExist: boolean = await this.service.checkClassPriceExistence(
      input.id!,
    );
    if (!isExist) {
      throw new GoneException('ClassPrice does not exist');
    }

    return this.service.update(input);
  }
}
