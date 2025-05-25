import { BatchEntity } from '../entities/batch.entity';

export interface BatchRepositoryPort {
  findById(id: number): Promise<BatchEntity | null>;
  getAll(): Promise<BatchEntity[] | null>;
  save(data: BatchEntity): Promise<BatchEntity>;
  update(data: Partial<BatchEntity>): Promise<BatchEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: BatchEntity): Promise<number>;
}
