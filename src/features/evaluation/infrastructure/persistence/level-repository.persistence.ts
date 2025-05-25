import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { LevelMapper } from '../mapper/level.mapper';
import { LevelRepositoryPort } from '../../domain/ports/level-repository.port';
import { LevelEntity } from '../../domain/entities/level.entity';

@Injectable()
export class LevelRepositoryPersistence implements LevelRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: LevelEntity): Promise<number> {
    return this.prisma.level.count({
      where: data,
    });
  }

  async findById(id: number): Promise<LevelEntity | null> {
    const result = await this.prisma.level.findFirst({
      where: { id },
    });
    return result ? LevelMapper.toEntity(result) : null;
  }

  async getAll(): Promise<LevelEntity[] | null> {
    const result = await this.prisma.level.findMany();
    return result.length ? LevelMapper.toEntityList(result) : null;
  }

  async save(data: LevelEntity): Promise<LevelEntity> {
    const created = await this.prisma.level.create({
      data: data,
    });
    return LevelMapper.toEntity(created);
  }

  async update(data: Partial<LevelEntity>): Promise<LevelEntity> {
    if (!data.id) {
      throw new Error('Level ID is required to update');
    }

    const updated = await this.prisma.level.update({
      where: { id: data.id },
      data: data,
    });

    return LevelMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.level.delete({
      where: { id },
    });
  }
}
