import { EnrollmentEntity } from '../entities/enrollment.entity';

export interface EnrollmentRepositoryPort {
  findById(id: number): Promise<EnrollmentEntity | null>;
  getAll(): Promise<EnrollmentEntity[] | null>;
  save(data: EnrollmentEntity): Promise<EnrollmentEntity>;
  update(data: Partial<EnrollmentEntity>): Promise<EnrollmentEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: EnrollmentEntity): Promise<number>;
}
