import { BillEntity } from '../entities/bill.entity';

export interface BillRepositoryPort {
  findById(id: number): Promise<BillEntity | null>;
  getAll(): Promise<BillEntity[] | null>;
  save(data: BillEntity): Promise<BillEntity>;
  update(data: Partial<BillEntity>): Promise<BillEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: BillEntity): Promise<number>;
}
