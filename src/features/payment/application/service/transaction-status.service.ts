import { Inject, Injectable } from '@nestjs/common';
import { TRANSACTION_STATUS_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { TransactionStatusRepositoryPort } from '../../domain/ports/transaction-status-repository.port';
import { TransactionStatusEntity } from '../../domain/entities/transaction-status.entity';

@Injectable()
export class TransactionStatusService {
  constructor(
    @Inject(TRANSACTION_STATUS_REPO_TOKEN)
    private readonly repo: TransactionStatusRepositoryPort,
  ) {}

  async create(
    data: TransactionStatusEntity,
  ): Promise<TransactionStatusEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<TransactionStatusEntity[] | null> {
    return this.repo.getAll();
  }

  async update(
    data: Partial<TransactionStatusEntity>,
  ): Promise<TransactionStatusEntity> {
    return this.repo.update(data);
  }

  async getTransactionStatus(
    id: number,
  ): Promise<TransactionStatusEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: TransactionStatusEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkTransactionStatusExistence(id: number): Promise<boolean> {
    return !!(await this.getTransactionStatus(id));
  }
}
