import { Inject, Injectable } from '@nestjs/common';
import { ADMIN_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { AdminEntity } from '../../domain/entities/admin.entity';
import { AdminRepositoryPort } from '../../domain/ports/admin-repository.port';

@Injectable()
export class AdminService {
  constructor(
    @Inject(ADMIN_REPO_TOKEN) private readonly repo: AdminRepositoryPort,
  ) {}

  async create(data: AdminEntity): Promise<AdminEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<AdminEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<AdminEntity>): Promise<AdminEntity> {
    return this.repo.update(data);
  }

  async checkDuplicateAdminUserId(id: number): Promise<boolean> {
    return !!(await this.repo.countByUserId(id));
  }

  async checkAdminExistence(id: number): Promise<boolean> {
    return !!(await this.repo.findById(id));
  }

  async getAdmin(id: number): Promise<AdminEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }
}
