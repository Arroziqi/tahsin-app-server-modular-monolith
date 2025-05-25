import { TransactionEntity } from '../entities/transaction.entity';

export interface TransactionRepositoryPort {
  findById(id: number): Promise<TransactionEntity | null>;
  getAll(): Promise<TransactionEntity[] | null>;
  save(data: TransactionEntity): Promise<TransactionEntity>;
  update(data: Partial<TransactionEntity>): Promise<TransactionEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: TransactionEntity): Promise<number>;
}
