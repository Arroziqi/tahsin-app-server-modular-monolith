import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { BillEntity } from '../../../domain/entities/bill.entity';
import { BillService } from '../../service/bill.service';

@Injectable()
export class GetBillUsecase implements UseCase<number, BillEntity | null> {
  constructor(private readonly service: BillService) {}

  async execute(id: number): Promise<BillEntity | null> {
    return await this.service.getBill(id);
  }
}
