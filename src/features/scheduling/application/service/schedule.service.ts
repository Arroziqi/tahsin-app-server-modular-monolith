import { Inject, Injectable } from '@nestjs/common';
import { SCHEDULE_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { ScheduleRepositoryPort } from '../../domain/ports/schedule-repository.port';
import { ScheduleEntity } from '../../domain/entities/schedule.entity';

@Injectable()
export class ScheduleService {
  constructor(
    @Inject(SCHEDULE_REPO_TOKEN)
    private readonly repo: ScheduleRepositoryPort,
  ) {}

  async create(data: ScheduleEntity): Promise<ScheduleEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<ScheduleEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<ScheduleEntity>): Promise<ScheduleEntity> {
    return this.repo.update(data);
  }

  async getSchedule(id: number): Promise<ScheduleEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: ScheduleEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkDataExistence(id: number): Promise<boolean> {
    return !!(await this.getSchedule(id));
  }
}
