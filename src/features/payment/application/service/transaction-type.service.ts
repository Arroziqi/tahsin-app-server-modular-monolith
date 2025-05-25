import { Inject, Injectable } from '@nestjs/common';
import { TRANSACTION_TYPE_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { TransactionTypeEntity } from '../../domain/entities/transaction-type.entity';
import { TransactionTypeRepositoryPort } from '../../domain/ports/transaction-type-repository.port';

@Injectable()
export class TransactionTypeService {
  constructor(
    @Inject(TRANSACTION_TYPE_REPO_TOKEN)
    private readonly repo: TransactionTypeRepositoryPort,
  ) {}

  async create(data: TransactionTypeEntity): Promise<TransactionTypeEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<TransactionTypeEntity[] | null> {
    return this.repo.getAll();
  }

  async update(
    data: Partial<TransactionTypeEntity>,
  ): Promise<TransactionTypeEntity> {
    return this.repo.update(data);
  }

  async getTransactionType(id: number): Promise<TransactionTypeEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: TransactionTypeEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkTransactionTypeExistence(id: number): Promise<boolean> {
    return !!(await this.getTransactionType(id));
  }
}
