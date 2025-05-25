import { AttendanceEntity } from '../entities/attendance.entity';

export interface AttendanceRepositoryPort {
  findById(id: number): Promise<AttendanceEntity | null>;
  getAll(): Promise<AttendanceEntity[] | null>;
  save(data: AttendanceEntity): Promise<AttendanceEntity>;
  update(data: Partial<AttendanceEntity>): Promise<AttendanceEntity>;
  delete(id: number): Promise<void>;
  countDuplicateData(data: AttendanceEntity): Promise<number>;
}
