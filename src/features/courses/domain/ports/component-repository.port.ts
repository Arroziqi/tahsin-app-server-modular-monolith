import { ComponentEntity } from '../entities/component.entity';

export interface ComponentRepositoryPort {
  findById(id: number): Promise<ComponentEntity | null>;
  getAll(): Promise<ComponentEntity[] | null>;
  save(data: ComponentEntity): Promise<ComponentEntity>;
  update(data: Partial<ComponentEntity>): Promise<ComponentEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: ComponentEntity): Promise<number>;
}
