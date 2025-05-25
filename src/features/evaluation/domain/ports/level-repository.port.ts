import { LevelEntity } from '../entities/level.entity';

export interface LevelRepositoryPort {
  findById(id: number): Promise<LevelEntity | null>;
  getAll(): Promise<LevelEntity[] | null>;
  save(data: LevelEntity): Promise<LevelEntity>;
  update(data: Partial<LevelEntity>): Promise<LevelEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: LevelEntity): Promise<number>;
}
