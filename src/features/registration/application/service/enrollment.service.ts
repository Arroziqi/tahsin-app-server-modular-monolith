import { Inject, Injectable } from '@nestjs/common';
import { ENROLLMENT_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { EnrollmentRepositoryPort } from '../../domain/ports/enrollment-repository.port';
import { EnrollmentEntity } from '../../domain/entities/enrollment.entity';

@Injectable()
export class EnrollmentService {
  constructor(
    @Inject(ENROLLMENT_REPO_TOKEN)
    private readonly repo: EnrollmentRepositoryPort,
  ) {}

  async create(data: EnrollmentEntity): Promise<EnrollmentEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<EnrollmentEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<EnrollmentEntity>): Promise<EnrollmentEntity> {
    return this.repo.update(data);
  }

  async getEnrollment(id: number): Promise<EnrollmentEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: EnrollmentEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkDataExistence(id: number): Promise<boolean> {
    return !!(await this.getEnrollment(id));
  }
}
