import { ScoreEntity } from '../entities/score.entity';

export interface ScoreRepositoryPort {
  findById(id: number): Promise<ScoreEntity | null>;
  getAll(): Promise<ScoreEntity[] | null>;
  save(data: ScoreEntity): Promise<ScoreEntity>;
  update(data: Partial<ScoreEntity>): Promise<ScoreEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: ScoreEntity): Promise<number>;
}
