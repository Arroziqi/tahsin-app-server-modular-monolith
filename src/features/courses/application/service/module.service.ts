import { Inject, Injectable } from '@nestjs/common';
import { MODULE_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { ModuleRepositoryPort } from '../../domain/ports/module-repository.port';
import { ModuleEntity } from '../../domain/entities/module.entity';

@Injectable()
export class ModuleService {
  constructor(
    @Inject(MODULE_REPO_TOKEN)
    private readonly repo: ModuleRepositoryPort,
  ) {}

  async create(data: ModuleEntity): Promise<ModuleEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<ModuleEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<ModuleEntity>): Promise<ModuleEntity> {
    return this.repo.update(data);
  }

  async getModule(id: number): Promise<ModuleEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: ModuleEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkDataExistence(id: number): Promise<boolean> {
    return !!(await this.getModule(id));
  }
}
