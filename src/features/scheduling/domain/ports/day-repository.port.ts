import { DayEntity } from '../entities/day.entity';

export interface DayRepositoryPort {
  findById(id: number): Promise<DayEntity | null>;
  getAll(): Promise<DayEntity[] | null>;
  save(data: DayEntity): Promise<DayEntity>;
  update(data: Partial<DayEntity>): Promise<DayEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: DayEntity): Promise<number>;
}
