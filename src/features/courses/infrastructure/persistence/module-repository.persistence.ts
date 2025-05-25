import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { ModuleRepositoryPort } from '../../domain/ports/module-repository.port';
import { ModuleEntity } from '../../domain/entities/module.entity';
import { ModuleMapper } from '../mapper/module.mapper';

@Injectable()
export class ModuleRepositoryPersistence implements ModuleRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: ModuleEntity): Promise<number> {
    return this.prisma.module.count({
      where: data,
    });
  }

  async findById(id: number): Promise<ModuleEntity | null> {
    const result = await this.prisma.module.findFirst({
      where: { id },
    });
    return result ? ModuleMapper.toEntity(result) : null;
  }

  async getAll(): Promise<ModuleEntity[] | null> {
    const result = await this.prisma.module.findMany();
    return result.length ? ModuleMapper.toEntityList(result) : null;
  }

  async save(data: ModuleEntity): Promise<ModuleEntity> {
    const created = await this.prisma.module.create({
      data: data,
    });
    return ModuleMapper.toEntity(created);
  }

  async update(data: Partial<ModuleEntity>): Promise<ModuleEntity> {
    if (!data.id) {
      throw new Error('Module ID is required to update');
    }

    const updated = await this.prisma.module.update({
      where: { id: data.id },
      data: data,
    });

    return ModuleMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.module.delete({
      where: { id },
    });
  }
}
