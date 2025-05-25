import { Inject, Injectable } from '@nestjs/common';
import { STUDENT_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { StudentEntity } from '../../domain/entities/student.entity';
import { StudentRepositoryPort } from '../../domain/ports/student-repository.port';

@Injectable()
export class StudentService {
  constructor(
    @Inject(STUDENT_REPO_TOKEN) private readonly repo: StudentRepositoryPort,
  ) {}

  async create(data: StudentEntity): Promise<StudentEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<StudentEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<StudentEntity>): Promise<StudentEntity> {
    return this.repo.update(data);
  }

  async checkDuplicateStudentUserId(id: number): Promise<boolean> {
    return !!(await this.repo.countByUserId(id));
  }

  async checkStudentExistence(id: number): Promise<boolean> {
    return !!(await this.repo.findById(id));
  }

  async getStudent(id: number): Promise<StudentEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }
}
