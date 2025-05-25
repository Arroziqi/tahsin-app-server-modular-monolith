import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { BatchEntity } from '../../domain/entities/batch.entity';
import { BatchRepositoryPort } from '../../domain/ports/batch-repository.port';
import { BatchMapper } from '../mapper/batch.mapper';

@Injectable()
export class BatchRepositoryPersistence implements BatchRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: BatchEntity): Promise<number> {
    return this.prisma.batch.count({
      where: data,
    });
  }

  async findById(id: number): Promise<BatchEntity | null> {
    const result = await this.prisma.batch.findFirst({
      where: { id },
    });
    return result ? BatchMapper.toEntity(result) : null;
  }

  async getAll(): Promise<BatchEntity[] | null> {
    const result = await this.prisma.batch.findMany();
    return result.length ? BatchMapper.toEntityList(result) : null;
  }

  async save(data: BatchEntity): Promise<BatchEntity> {
    const created = await this.prisma.batch.create({
      data: data,
    });
    return BatchMapper.toEntity(created);
  }

  async update(data: Partial<BatchEntity>): Promise<BatchEntity> {
    if (!data.id) {
      throw new Error('Batch ID is required to update');
    }

    const updated = await this.prisma.batch.update({
      where: { id: data.id },
      data: data,
    });

    return BatchMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.batch.delete({
      where: { id },
    });
  }
}
