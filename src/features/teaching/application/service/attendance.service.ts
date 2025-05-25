import { Inject, Injectable } from '@nestjs/common';
import { ATTENDANCE_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { AttendanceRepositoryPort } from '../../domain/ports/attendance-repository.port';
import { AttendanceEntity } from '../../domain/entities/attendance.entity';

@Injectable()
export class AttendanceService {
  constructor(
    @Inject(ATTENDANCE_REPO_TOKEN)
    private readonly repo: AttendanceRepositoryPort,
  ) {}

  async create(data: AttendanceEntity): Promise<AttendanceEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<AttendanceEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<AttendanceEntity>): Promise<AttendanceEntity> {
    return this.repo.update(data);
  }

  async getAttendance(id: number): Promise<AttendanceEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: AttendanceEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkDataExistence(id: number): Promise<boolean> {
    return !!(await this.getAttendance(id));
  }
}
