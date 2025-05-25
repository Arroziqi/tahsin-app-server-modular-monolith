import { Inject, Injectable } from '@nestjs/common';
import { SCORE_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { ScoreRepositoryPort } from '../../domain/ports/score-repository.port';
import { ScoreEntity } from '../../domain/entities/score.entity';

@Injectable()
export class ScoreService {
  constructor(
    @Inject(SCORE_REPO_TOKEN)
    private readonly repo: ScoreRepositoryPort,
  ) {}

  async create(data: ScoreEntity): Promise<ScoreEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<ScoreEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<ScoreEntity>): Promise<ScoreEntity> {
    return this.repo.update(data);
  }

  async getScore(id: number): Promise<ScoreEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: ScoreEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkDataExistence(id: number): Promise<boolean> {
    return !!(await this.getScore(id));
  }
}
