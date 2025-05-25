import { AdminEntity } from '../entities/admin.entity';

export interface AdminRepositoryPort {
  findById(id: number): Promise<AdminEntity | null>;
  findByUserId(id: number): Promise<AdminEntity | null>;
  getAll(): Promise<AdminEntity[] | null>;
  countByUserId(id: number): Promise<number>;
  save(data: AdminEntity): Promise<AdminEntity>;
  update(data: Partial<AdminEntity>): Promise<AdminEntity>;
  delete(id: number): Promise<void>;
}
