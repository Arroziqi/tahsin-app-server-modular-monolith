import { ScheduleEntity } from '../entities/schedule.entity';

export interface ScheduleRepositoryPort {
  findById(id: number): Promise<ScheduleEntity | null>;
  getAll(): Promise<ScheduleEntity[] | null>;
  save(data: ScheduleEntity): Promise<ScheduleEntity>;
  update(data: Partial<ScheduleEntity>): Promise<ScheduleEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: ScheduleEntity): Promise<number>;
}
