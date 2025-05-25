import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { TimeMapper } from '../mapper/time.mapper';
import { TimeRepositoryPort } from '../../domain/ports/time-repository.port';
import { TimeEntity } from '../../domain/entities/time.entity';

@Injectable()
export class TimeRepositoryPersistence implements TimeRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: TimeEntity): Promise<number> {
    return this.prisma.time.count({
      where: data,
    });
  }

  async findById(id: number): Promise<TimeEntity | null> {
    const result = await this.prisma.time.findFirst({
      where: { id },
    });
    return result ? TimeMapper.toEntity(result) : null;
  }

  async getAll(): Promise<TimeEntity[] | null> {
    const result = await this.prisma.time.findMany();
    return result.length ? TimeMapper.toEntityList(result) : null;
  }

  async save(data: TimeEntity): Promise<TimeEntity> {
    const created = await this.prisma.time.create({
      data: data,
    });
    return TimeMapper.toEntity(created);
  }

  async update(data: Partial<TimeEntity>): Promise<TimeEntity> {
    if (!data.id) {
      throw new Error('Time ID is required to update');
    }

    const updated = await this.prisma.time.update({
      where: { id: data.id },
      data: data,
    });

    return TimeMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.time.delete({
      where: { id },
    });
  }
}
