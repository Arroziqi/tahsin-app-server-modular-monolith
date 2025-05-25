import { TeacherEntity } from '../entities/teacher.entity';

export interface TeacherRepositoryPort {
  findById(id: number): Promise<TeacherEntity | null>;
  findByUserId(id: number): Promise<TeacherEntity | null>;
  getAll(): Promise<TeacherEntity[] | null>;
  countByUserId(id: number): Promise<number>;
  save(data: TeacherEntity): Promise<TeacherEntity>;
  update(data: Partial<TeacherEntity>): Promise<TeacherEntity>;
  delete(id: number): Promise<void>;
}
