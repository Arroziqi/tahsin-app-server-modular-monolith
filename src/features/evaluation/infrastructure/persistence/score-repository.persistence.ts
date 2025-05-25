import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { ScoreMapper } from '../mapper/score.mapper';
import { ScoreRepositoryPort } from '../../domain/ports/score-repository.port';
import { ScoreEntity } from '../../domain/entities/score.entity';

@Injectable()
export class ScoreRepositoryPersistence implements ScoreRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: ScoreEntity): Promise<number> {
    return this.prisma.score.count({
      where: data,
    });
  }

  async findById(id: number): Promise<ScoreEntity | null> {
    const result = await this.prisma.score.findFirst({
      where: { id },
    });
    return result ? ScoreMapper.toEntity(result) : null;
  }

  async getAll(): Promise<ScoreEntity[] | null> {
    const result = await this.prisma.score.findMany();
    return result.length ? ScoreMapper.toEntityList(result) : null;
  }

  async save(data: ScoreEntity): Promise<ScoreEntity> {
    const created = await this.prisma.score.create({
      data: data,
    });
    return ScoreMapper.toEntity(created);
  }

  async update(data: Partial<ScoreEntity>): Promise<ScoreEntity> {
    if (!data.id) {
      throw new Error('Score ID is required to update');
    }

    const updated = await this.prisma.score.update({
      where: { id: data.id },
      data: data,
    });

    return ScoreMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.score.delete({
      where: { id },
    });
  }
}
