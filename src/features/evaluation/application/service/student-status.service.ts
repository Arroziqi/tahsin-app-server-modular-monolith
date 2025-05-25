import { Inject, Injectable } from '@nestjs/common';
import { STUDENT_STATUS_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { StudentStatusRepositoryPort } from '../../domain/ports/student-status-repository.port';
import { StudentStatusEntity } from '../../domain/entities/student-status.entity';

@Injectable()
export class StudentStatusService {
  constructor(
    @Inject(STUDENT_STATUS_REPO_TOKEN)
    private readonly repo: StudentStatusRepositoryPort,
  ) {}

  async create(data: StudentStatusEntity): Promise<StudentStatusEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<StudentStatusEntity[] | null> {
    return this.repo.getAll();
  }

  async update(
    data: Partial<StudentStatusEntity>,
  ): Promise<StudentStatusEntity> {
    return this.repo.update(data);
  }

  async getStudentStatus(id: number): Promise<StudentStatusEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: StudentStatusEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkDataExistence(id: number): Promise<boolean> {
    return !!(await this.getStudentStatus(id));
  }
}
