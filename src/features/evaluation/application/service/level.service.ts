import { Inject, Injectable } from '@nestjs/common';
import { LEVEL_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { LevelRepositoryPort } from '../../domain/ports/level-repository.port';
import { LevelEntity } from '../../domain/entities/level.entity';

@Injectable()
export class LevelService {
  constructor(
    @Inject(LEVEL_REPO_TOKEN)
    private readonly repo: LevelRepositoryPort,
  ) {}

  async create(data: LevelEntity): Promise<LevelEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<LevelEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<LevelEntity>): Promise<LevelEntity> {
    return this.repo.update(data);
  }

  async getLevel(id: number): Promise<LevelEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: LevelEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkDataExistence(id: number): Promise<boolean> {
    return !!(await this.getLevel(id));
  }
}
