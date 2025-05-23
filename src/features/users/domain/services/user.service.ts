import { Inject, Injectable } from '@nestjs/common';
import { USER_REPO_TOKEN } from '../../constant/provider.token';
import { UserRepositoryPort } from '../ports/userRepository.port';
import { UserEntity } from '../entities/user.entity';
import { HasherService } from '../../../../common/services/crypto/hasher.service';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPO_TOKEN) private readonly repo: UserRepositoryPort,
    private readonly hasher: HasherService,
  ) {}

  async create(user: UserEntity): Promise<UserEntity> {
    return this.repo.save(user);
  }

  async getAll(): Promise<UserEntity[] | null> {
    return this.repo.getAll();
  }

  async update(user: Partial<UserEntity>): Promise<UserEntity> {
    return this.repo.update(user);
  }

  async hashPassword(password: string): Promise<string> {
    return this.hasher.hash(password);
  }

  async checkDuplicateUsername(username: string): Promise<boolean> {
    return !!(await this.repo.countByUsername(username));
  }

  async checkUserExistence(id: number): Promise<boolean> {
    return !!(await this.repo.findById(id));
  }

  async getUser(id: number): Promise<UserEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }
}
