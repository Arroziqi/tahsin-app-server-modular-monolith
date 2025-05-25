import { Inject, Injectable } from '@nestjs/common';
import { TIME_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { TimeRepositoryPort } from '../../domain/ports/time-repository.port';
import { TimeEntity } from '../../domain/entities/time.entity';

@Injectable()
export class TimeService {
  constructor(
    @Inject(TIME_REPO_TOKEN)
    private readonly repo: TimeRepositoryPort,
  ) {}

  async create(data: TimeEntity): Promise<TimeEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<TimeEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<TimeEntity>): Promise<TimeEntity> {
    return this.repo.update(data);
  }

  async getTime(id: number): Promise<TimeEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: TimeEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkDataExistence(id: number): Promise<boolean> {
    return !!(await this.getTime(id));
  }
}
