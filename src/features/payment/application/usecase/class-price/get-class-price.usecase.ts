import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ClassPriceService } from '../../service/class-price.service';
import { ClassPriceEntity } from '../../../domain/entities/class-price.entity';

@Injectable()
export class GetClassPriceUsecase
  implements UseCase<number, ClassPriceEntity | null>
{
  constructor(private readonly service: ClassPriceService) {}

  async execute(id: number): Promise<ClassPriceEntity | null> {
    return await this.service.getClassPrice(id);
  }
}
