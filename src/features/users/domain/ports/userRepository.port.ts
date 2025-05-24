import { UserEntity } from '../entities/user.entity';

export interface UserRepositoryPort {
  findById(id: number): Promise<UserEntity | null>;
  findByUsername(username: string): Promise<UserEntity | null>;
  findByToken(token: string): Promise<UserEntity | null>;
  getAll(): Promise<UserEntity[] | null>;
  countByUsername(username: string): Promise<number>;
  save(user: UserEntity): Promise<UserEntity>;
  update(user: Partial<UserEntity>): Promise<UserEntity>;
  delete(id: number): Promise<void>;
}
