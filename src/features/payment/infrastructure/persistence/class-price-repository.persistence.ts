import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { ClassPriceMapper } from '../mapper/class-price.mapper';
import { ClassPriceEntity } from '../../domain/entities/class-price.entity';
import { ClassPriceRepositoryPort } from '../../domain/ports/class-price-repository.port';

@Injectable()
export class ClassPriceRepositoryPersistence
  implements ClassPriceRepositoryPort
{
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: ClassPriceEntity): Promise<number> {
    return this.prisma.classPrice.count({
      where: data,
    });
  }

  async findById(id: number): Promise<ClassPriceEntity | null> {
    const result = await this.prisma.classPrice.findFirst({
      where: { id },
    });
    return result ? ClassPriceMapper.toEntity(result) : null;
  }

  async getAll(): Promise<ClassPriceEntity[] | null> {
    const result = await this.prisma.classPrice.findMany();
    return result.length ? ClassPriceMapper.toEntityList(result) : null;
  }

  async save(data: ClassPriceEntity): Promise<ClassPriceEntity> {
    const created = await this.prisma.classPrice.create({
      data: data,
    });
    return ClassPriceMapper.toEntity(created);
  }

  async update(data: Partial<ClassPriceEntity>): Promise<ClassPriceEntity> {
    if (!data.id) {
      throw new Error('ClassPrice ID is required to update');
    }

    const updated = await this.prisma.classPrice.update({
      where: { id: data.id },
      data: data,
    });

    return ClassPriceMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.classPrice.delete({
      where: { id },
    });
  }
}
