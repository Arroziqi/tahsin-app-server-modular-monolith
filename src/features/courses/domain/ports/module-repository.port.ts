import { ModuleEntity } from '../entities/module.entity';

export interface ModuleRepositoryPort {
  findById(id: number): Promise<ModuleEntity | null>;
  getAll(): Promise<ModuleEntity[] | null>;
  save(data: ModuleEntity): Promise<ModuleEntity>;
  update(data: Partial<ModuleEntity>): Promise<ModuleEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: ModuleEntity): Promise<number>;
}
