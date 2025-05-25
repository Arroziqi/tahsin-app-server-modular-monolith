import { Inject, Injectable } from '@nestjs/common';
import { BANK_ACCOUNT_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { BankAccountRepositoryPort } from '../../domain/ports/bank-account-repository.port';
import { BankAccountEntity } from '../../domain/entities/bank-account.entity';

@Injectable()
export class BankAccountService {
  constructor(
    @Inject(BANK_ACCOUNT_REPO_TOKEN)
    private readonly repo: BankAccountRepositoryPort,
  ) {}

  async create(data: BankAccountEntity): Promise<BankAccountEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<BankAccountEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<BankAccountEntity>): Promise<BankAccountEntity> {
    return this.repo.update(data);
  }

  async getBankAccount(id: number): Promise<BankAccountEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: BankAccountEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkBankAccountExistence(id: number): Promise<boolean> {
    return !!(await this.getBankAccount(id));
  }
}
