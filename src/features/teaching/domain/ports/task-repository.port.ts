import { TaskEntity } from '../entities/task.entity';

export interface TaskRepositoryPort {
  findById(id: number): Promise<TaskEntity | null>;
  getAll(): Promise<TaskEntity[] | null>;
  save(data: TaskEntity): Promise<TaskEntity>;
  update(data: Partial<TaskEntity>): Promise<TaskEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: TaskEntity): Promise<number>;
}
