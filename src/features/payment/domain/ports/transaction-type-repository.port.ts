import { TransactionTypeEntity } from '../entities/transaction-type.entity';

export interface TransactionTypeRepositoryPort {
  findById(id: number): Promise<TransactionTypeEntity | null>;
  getAll(): Promise<TransactionTypeEntity[] | null>;
  save(data: TransactionTypeEntity): Promise<TransactionTypeEntity>;
  update(data: Partial<TransactionTypeEntity>): Promise<TransactionTypeEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: TransactionTypeEntity): Promise<number>;
}
