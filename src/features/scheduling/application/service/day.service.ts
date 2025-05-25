import { Inject, Injectable } from '@nestjs/common';
import { DAY_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { DayRepositoryPort } from '../../domain/ports/day-repository.port';
import { DayEntity } from '../../domain/entities/day.entity';

@Injectable()
export class DayService {
  constructor(
    @Inject(DAY_REPO_TOKEN)
    private readonly repo: DayRepositoryPort,
  ) {}

  async create(data: DayEntity): Promise<DayEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<DayEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<DayEntity>): Promise<DayEntity> {
    return this.repo.update(data);
  }

  async getDay(id: number): Promise<DayEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: DayEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkDataExistence(id: number): Promise<boolean> {
    return !!(await this.getDay(id));
  }
}
