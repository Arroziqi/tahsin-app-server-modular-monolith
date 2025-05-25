import { Inject, Injectable } from '@nestjs/common';
import { BILL_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { BillRepositoryPort } from '../../domain/ports/bill-repository.port';
import { BillEntity } from '../../domain/entities/bill.entity';

@Injectable()
export class BillService {
  constructor(
    @Inject(BILL_REPO_TOKEN)
    private readonly repo: BillRepositoryPort,
  ) {}

  async create(data: BillEntity): Promise<BillEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<BillEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<BillEntity>): Promise<BillEntity> {
    return this.repo.update(data);
  }

  async getBill(id: number): Promise<BillEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: BillEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkBillExistence(id: number): Promise<boolean> {
    return !!(await this.getBill(id));
  }
}
