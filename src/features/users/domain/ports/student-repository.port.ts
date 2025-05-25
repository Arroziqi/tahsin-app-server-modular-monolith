import { StudentEntity } from '../entities/student.entity';

export interface StudentRepositoryPort {
  findById(id: number): Promise<StudentEntity | null>;
  findByUserId(id: number): Promise<StudentEntity | null>;
  getAll(): Promise<StudentEntity[] | null>;
  countByUserId(id: number): Promise<number>;
  save(student: StudentEntity): Promise<StudentEntity>;
  update(student: Partial<StudentEntity>): Promise<StudentEntity>;
  delete(id: number): Promise<void>;
}
