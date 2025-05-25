import { Inject, Injectable } from '@nestjs/common';
import { TEACHER_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { TeacherEntity } from '../../domain/entities/teacher.entity';
import { TeacherRepositoryPort } from '../../domain/ports/teacher-repository.port';

@Injectable()
export class TeacherService {
  constructor(
    @Inject(TEACHER_REPO_TOKEN) private readonly repo: TeacherRepositoryPort,
  ) {}

  async create(data: TeacherEntity): Promise<TeacherEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<TeacherEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<TeacherEntity>): Promise<TeacherEntity> {
    return this.repo.update(data);
  }

  async checkDuplicateTeacherUserId(id: number): Promise<boolean> {
    return !!(await this.repo.countByUserId(id));
  }

  async checkTeacherExistence(id: number): Promise<boolean> {
    return !!(await this.repo.findById(id));
  }

  async getTeacher(id: number): Promise<TeacherEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }
}
