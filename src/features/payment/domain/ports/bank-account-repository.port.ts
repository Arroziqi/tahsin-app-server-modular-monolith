import { BankAccountEntity } from '../entities/bank-account.entity';

export interface BankAccountRepositoryPort {
  findById(id: number): Promise<BankAccountEntity | null>;
  getAll(): Promise<BankAccountEntity[] | null>;
  save(data: BankAccountEntity): Promise<BankAccountEntity>;
  update(data: Partial<BankAccountEntity>): Promise<BankAccountEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: BankAccountEntity): Promise<number>;
}
