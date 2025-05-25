import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { BillEntity } from '../../../domain/entities/bill.entity';
import { BillService } from '../../service/bill.service';

@Injectable()
export class UpdateBillUsecase
  implements UseCase<Partial<BillEntity>, BillEntity>
{
  constructor(private readonly service: BillService) {}

  async execute(input: Partial<BillEntity>): Promise<BillEntity> {
    const isExist: boolean = await this.service.checkBillExistence(input.id!);
    if (!isExist) {
      throw new GoneException('Bill does not exist');
    }

    return this.service.update(input);
  }
}
