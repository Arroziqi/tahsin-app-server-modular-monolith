import { ClassEntity } from '../entities/class.entity';

export interface ClassRepositoryPort {
  findById(id: number): Promise<ClassEntity | null>;
  getAll(): Promise<ClassEntity[] | null>;
  save(data: ClassEntity): Promise<ClassEntity>;
  update(data: Partial<ClassEntity>): Promise<ClassEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: ClassEntity): Promise<number>;
}
