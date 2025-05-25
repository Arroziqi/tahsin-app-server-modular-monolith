import { Inject, Injectable } from '@nestjs/common';
import { TASK_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { TaskRepositoryPort } from '../../domain/ports/task-repository.port';
import { TaskEntity } from '../../domain/entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @Inject(TASK_REPO_TOKEN)
    private readonly repo: TaskRepositoryPort,
  ) {}

  async create(data: TaskEntity): Promise<TaskEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<TaskEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<TaskEntity>): Promise<TaskEntity> {
    return this.repo.update(data);
  }

  async getTask(id: number): Promise<TaskEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: TaskEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkDataExistence(id: number): Promise<boolean> {
    return !!(await this.getTask(id));
  }
}
