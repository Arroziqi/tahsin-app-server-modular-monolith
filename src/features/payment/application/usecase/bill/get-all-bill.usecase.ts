import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { BillEntity } from '../../../domain/entities/bill.entity';
import { BillService } from '../../service/bill.service';

@Injectable()
export class GetAllBillUsecase implements UseCase<void, BillEntity[] | null> {
  constructor(private readonly service: BillService) {}

  async execute(input: void): Promise<BillEntity[] | null> {
    return await this.service.getAll();
  }
}
