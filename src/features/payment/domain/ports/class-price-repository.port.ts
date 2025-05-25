import { ClassPriceEntity } from '../entities/class-price.entity';

export interface ClassPriceRepositoryPort {
  findById(id: number): Promise<ClassPriceEntity | null>;
  getAll(): Promise<ClassPriceEntity[] | null>;
  save(data: ClassPriceEntity): Promise<ClassPriceEntity>;
  update(data: Partial<ClassPriceEntity>): Promise<ClassPriceEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: ClassPriceEntity): Promise<number>;
}
