import { Inject, Injectable } from '@nestjs/common';
import { BATCH_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { BatchRepositoryPort } from '../../domain/ports/batch-repository.port';
import { BatchEntity } from '../../domain/entities/batch.entity';

@Injectable()
export class BatchService {
  constructor(
    @Inject(BATCH_REPO_TOKEN)
    private readonly repo: BatchRepositoryPort,
  ) {}

  async create(data: BatchEntity): Promise<BatchEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<BatchEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<BatchEntity>): Promise<BatchEntity> {
    return this.repo.update(data);
  }

  async getBatch(id: number): Promise<BatchEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: BatchEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkDataExistence(id: number): Promise<boolean> {
    return !!(await this.getBatch(id));
  }
}
