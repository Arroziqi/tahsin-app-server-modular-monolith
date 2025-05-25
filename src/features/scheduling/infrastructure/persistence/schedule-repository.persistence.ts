import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { ScheduleMapper } from '../mapper/schedule.mapper';
import { ScheduleRepositoryPort } from '../../domain/ports/schedule-repository.port';
import { ScheduleEntity } from '../../domain/entities/schedule.entity';

@Injectable()
export class ScheduleRepositoryPersistence implements ScheduleRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: ScheduleEntity): Promise<number> {
    return this.prisma.schedule.count({
      where: data,
    });
  }

  async findById(id: number): Promise<ScheduleEntity | null> {
    const result = await this.prisma.schedule.findFirst({
      where: { id },
    });
    return result ? ScheduleMapper.toEntity(result) : null;
  }

  async getAll(): Promise<ScheduleEntity[] | null> {
    const result = await this.prisma.schedule.findMany();
    return result.length ? ScheduleMapper.toEntityList(result) : null;
  }

  async save(data: ScheduleEntity): Promise<ScheduleEntity> {
    const created = await this.prisma.schedule.create({
      data: data,
    });
    return ScheduleMapper.toEntity(created);
  }

  async update(data: Partial<ScheduleEntity>): Promise<ScheduleEntity> {
    if (!data.id) {
      throw new Error('Schedule ID is required to update');
    }

    const updated = await this.prisma.schedule.update({
      where: { id: data.id },
      data: data,
    });

    return ScheduleMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.schedule.delete({
      where: { id },
    });
  }
}
