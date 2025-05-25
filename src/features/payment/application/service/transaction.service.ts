import { Inject, Injectable } from '@nestjs/common';
import { TRANSACTION_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { TransactionEntity } from '../../domain/entities/transaction.entity';
import { TransactionRepositoryPort } from '../../domain/ports/transaction-repository.port';

@Injectable()
export class TransactionService {
  constructor(
    @Inject(TRANSACTION_REPO_TOKEN)
    private readonly repo: TransactionRepositoryPort,
  ) {}

  async create(data: TransactionEntity): Promise<TransactionEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<TransactionEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<TransactionEntity>): Promise<TransactionEntity> {
    return this.repo.update(data);
  }

  async getTransaction(id: number): Promise<TransactionEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: TransactionEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkTransactionExistence(id: number): Promise<boolean> {
    return !!(await this.getTransaction(id));
  }
}
