import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { BillEntity } from '../../../domain/entities/bill.entity';
import { BillService } from '../../service/bill.service';

@Injectable()
export class CreateBillUsecase implements UseCase<BillEntity, BillEntity> {
  constructor(private readonly service: BillService) {}

  async execute(input: BillEntity): Promise<BillEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('Bill already exists');
    }

    return this.service.create(input);
  }
}
