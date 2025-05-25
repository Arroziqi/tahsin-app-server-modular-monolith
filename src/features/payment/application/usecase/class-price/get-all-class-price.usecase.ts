import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ClassPriceService } from '../../service/class-price.service';
import { ClassPriceEntity } from '../../../domain/entities/class-price.entity';

@Injectable()
export class GetAllClassPriceUsecase
  implements UseCase<void, ClassPriceEntity[] | null>
{
  constructor(private readonly service: ClassPriceService) {}

  async execute(input: void): Promise<ClassPriceEntity[] | null> {
    return await this.service.getAll();
  }
}
