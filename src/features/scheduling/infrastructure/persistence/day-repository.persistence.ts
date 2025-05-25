import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { DayMapper } from '../mapper/day.mapper';
import { DayRepositoryPort } from '../../domain/ports/day-repository.port';
import { DayEntity } from '../../domain/entities/day.entity';

@Injectable()
export class DayRepositoryPersistence implements DayRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: DayEntity): Promise<number> {
    return this.prisma.day.count({
      where: data,
    });
  }

  async findById(id: number): Promise<DayEntity | null> {
    const result = await this.prisma.day.findFirst({
      where: { id },
    });
    return result ? DayMapper.toEntity(result) : null;
  }

  async getAll(): Promise<DayEntity[] | null> {
    const result = await this.prisma.day.findMany();
    return result.length ? DayMapper.toEntityList(result) : null;
  }

  async save(data: DayEntity): Promise<DayEntity> {
    const created = await this.prisma.day.create({
      data: data,
    });
    return DayMapper.toEntity(created);
  }

  async update(data: Partial<DayEntity>): Promise<DayEntity> {
    if (!data.id) {
      throw new Error('Day ID is required to update');
    }

    const updated = await this.prisma.day.update({
      where: { id: data.id },
      data: data,
    });

    return DayMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.day.delete({
      where: { id },
    });
  }
}
