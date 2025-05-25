import { TimeEntity } from '../entities/time.entity';

export interface TimeRepositoryPort {
  findById(id: number): Promise<TimeEntity | null>;
  getAll(): Promise<TimeEntity[] | null>;
  save(data: TimeEntity): Promise<TimeEntity>;
  update(data: Partial<TimeEntity>): Promise<TimeEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: TimeEntity): Promise<number>;
}
