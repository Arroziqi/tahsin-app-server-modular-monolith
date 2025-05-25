import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ClassPriceService } from '../../service/class-price.service';

@Injectable()
export class DeleteClassPriceUsecase
  implements UseCase<number, { message: string }>
{
  constructor(private readonly service: ClassPriceService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkClassPriceExistence(input);
    if (!isExist) {
      throw new NotFoundException('ClassPrice does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
