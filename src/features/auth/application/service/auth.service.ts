import { Inject, Injectable } from '@nestjs/common';
import { USER_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { UserRepositoryPort } from '../../../users/domain/ports/userRepository.port';
import { HasherService } from '../../../../common/services/crypto/hasher.service';
import { UserEntity } from '../../../users/domain/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly hasher: HasherService,
    @Inject(USER_REPO_TOKEN) private readonly userRepo: UserRepositoryPort,
  ) {}

  async create(user: UserEntity): Promise<UserEntity> {
    return this.userRepo.save(user);
  }

  async update(user: Partial<UserEntity>): Promise<UserEntity> {
    return this.userRepo.update(user);
  }

  async hashPassword(password: string): Promise<string> {
    return this.hasher.hash(password);
  }

  async verifyPassword(password: string, hash: string): Promise<boolean> {
    return this.hasher.verify(password, hash);
  }

  async checkDuplicateUsername(username: string): Promise<boolean> {
    return !!(await this.userRepo.countByUsername(username));
  }

  async getUser(username: string): Promise<UserEntity | null> {
    return this.userRepo.findByUsername(username);
  }

  async getUserByToken(token: string): Promise<UserEntity | null> {
    return this.userRepo.findByToken(token);
  }
}
