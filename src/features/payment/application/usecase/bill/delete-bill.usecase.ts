import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { BillService } from '../../service/bill.service';

@Injectable()
export class DeleteBillUsecase implements UseCase<number, { message: string }> {
  constructor(private readonly service: BillService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkBillExistence(input);
    if (!isExist) {
      throw new NotFoundException('Bill does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
