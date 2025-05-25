import { TransactionStatusEntity } from '../entities/transaction-status.entity';

export interface TransactionStatusRepositoryPort {
  findById(id: number): Promise<TransactionStatusEntity | null>;
  getAll(): Promise<TransactionStatusEntity[] | null>;
  save(data: TransactionStatusEntity): Promise<TransactionStatusEntity>;
  update(
    data: Partial<TransactionStatusEntity>,
  ): Promise<TransactionStatusEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: TransactionStatusEntity): Promise<number>;
}
