import { Inject, Injectable } from '@nestjs/common';
import { COMPONENT_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { ComponentRepositoryPort } from '../../domain/ports/component-repository.port';
import { ComponentEntity } from '../../domain/entities/component.entity';

@Injectable()
export class ComponentService {
  constructor(
    @Inject(COMPONENT_REPO_TOKEN)
    private readonly repo: ComponentRepositoryPort,
  ) {}

  async create(data: ComponentEntity): Promise<ComponentEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<ComponentEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<ComponentEntity>): Promise<ComponentEntity> {
    return this.repo.update(data);
  }

  async getComponent(id: number): Promise<ComponentEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: ComponentEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkDataExistence(id: number): Promise<boolean> {
    return !!(await this.getComponent(id));
  }
}
