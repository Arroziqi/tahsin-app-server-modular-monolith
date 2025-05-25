import { Inject, Injectable } from '@nestjs/common';
import { CLASS_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { ClassRepositoryPort } from '../../domain/ports/class-repository.port';
import { ClassEntity } from '../../domain/entities/class.entity';

@Injectable()
export class ClassService {
  constructor(
    @Inject(CLASS_REPO_TOKEN)
    private readonly repo: ClassRepositoryPort,
  ) {}

  async create(data: ClassEntity): Promise<ClassEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<ClassEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<ClassEntity>): Promise<ClassEntity> {
    return this.repo.update(data);
  }

  async getClass(id: number): Promise<ClassEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: ClassEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkDataExistence(id: number): Promise<boolean> {
    return !!(await this.getClass(id));
  }
}
