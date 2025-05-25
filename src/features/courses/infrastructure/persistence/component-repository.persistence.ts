import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { ComponentEntity } from '../../domain/entities/component.entity';
import { ComponentRepositoryPort } from '../../domain/ports/component-repository.port';
import { ComponentMapper } from '../mapper/component.mapper';

@Injectable()
export class ComponentRepositoryPersistence implements ComponentRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: ComponentEntity): Promise<number> {
    return this.prisma.component.count({
      where: data,
    });
  }

  async findById(id: number): Promise<ComponentEntity | null> {
    const result = await this.prisma.component.findFirst({
      where: { id },
    });
    return result ? ComponentMapper.toEntity(result) : null;
  }

  async getAll(): Promise<ComponentEntity[] | null> {
    const result = await this.prisma.component.findMany();
    return result.length ? ComponentMapper.toEntityList(result) : null;
  }

  async save(data: ComponentEntity): Promise<ComponentEntity> {
    const created = await this.prisma.component.create({
      data: data,
    });
    return ComponentMapper.toEntity(created);
  }

  async update(data: Partial<ComponentEntity>): Promise<ComponentEntity> {
    if (!data.id) {
      throw new Error('Component ID is required to update');
    }

    const updated = await this.prisma.component.update({
      where: { id: data.id },
      data: data,
    });

    return ComponentMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.component.delete({
      where: { id },
    });
  }
}
