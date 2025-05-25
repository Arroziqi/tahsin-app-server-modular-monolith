import { StudentStatusEntity } from '../entities/student-status.entity';

export interface StudentStatusRepositoryPort {
  findById(id: number): Promise<StudentStatusEntity | null>;
  getAll(): Promise<StudentStatusEntity[] | null>;
  save(data: StudentStatusEntity): Promise<StudentStatusEntity>;
  update(data: Partial<StudentStatusEntity>): Promise<StudentStatusEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: StudentStatusEntity): Promise<number>;
}
