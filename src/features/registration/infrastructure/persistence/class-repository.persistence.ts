import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { ClassEntity } from '../../domain/entities/class.entity';
import { ClassRepositoryPort } from '../../domain/ports/class-repository.port';
import { ClassMapper } from '../mapper/class.mapper';

@Injectable()
export class ClassRepositoryPersistence implements ClassRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: ClassEntity): Promise<number> {
    return this.prisma.class.count({
      where: data,
    });
  }

  async findById(id: number): Promise<ClassEntity | null> {
    const result = await this.prisma.class.findFirst({
      where: { id },
    });
    return result ? ClassMapper.toEntity(result) : null;
  }

  async getAll(): Promise<ClassEntity[] | null> {
    const result = await this.prisma.class.findMany();
    return result.length ? ClassMapper.toEntityList(result) : null;
  }

  async save(data: ClassEntity): Promise<ClassEntity> {
    const created = await this.prisma.class.create({
      data: data,
    });
    return ClassMapper.toEntity(created);
  }

  async update(data: Partial<ClassEntity>): Promise<ClassEntity> {
    if (!data.id) {
      throw new Error('Class ID is required to update');
    }

    const updated = await this.prisma.class.update({
      where: { id: data.id },
      data: data,
    });

    return ClassMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.class.delete({
      where: { id },
    });
  }
}
