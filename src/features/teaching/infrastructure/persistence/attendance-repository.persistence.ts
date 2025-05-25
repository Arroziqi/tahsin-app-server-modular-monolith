import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { AttendanceMapper } from '../mapper/attendance.mapper';
import { AttendanceRepositoryPort } from '../../domain/ports/attendance-repository.port';
import { AttendanceEntity } from '../../domain/entities/attendance.entity';

@Injectable()
export class AttendanceRepositoryPersistence
  implements AttendanceRepositoryPort
{
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: AttendanceEntity): Promise<number> {
    return this.prisma.attendance.count({
      where: data,
    });
  }

  async findById(id: number): Promise<AttendanceEntity | null> {
    const result = await this.prisma.attendance.findFirst({
      where: { id },
    });
    return result ? AttendanceMapper.toEntity(result) : null;
  }

  async getAll(): Promise<AttendanceEntity[] | null> {
    const result = await this.prisma.attendance.findMany();
    return result.length ? AttendanceMapper.toEntityList(result) : null;
  }

  async save(data: AttendanceEntity): Promise<AttendanceEntity> {
    const created = await this.prisma.attendance.create({
      data: data,
    });
    return AttendanceMapper.toEntity(created);
  }

  async update(data: Partial<AttendanceEntity>): Promise<AttendanceEntity> {
    if (!data.id) {
      throw new Error('Attendance ID is required to update');
    }

    const updated = await this.prisma.attendance.update({
      where: { id: data.id },
      data: data,
    });

    return AttendanceMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.attendance.delete({
      where: { id },
    });
  }
}
