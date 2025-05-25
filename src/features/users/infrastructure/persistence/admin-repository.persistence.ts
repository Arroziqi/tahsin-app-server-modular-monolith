import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { AdminMapper } from '../mapper/admin.mapper';
import { AdminRepositoryPort } from '../../domain/ports/admin-repository.port';
import { AdminEntity } from '../../domain/entities/admin.entity';

@Injectable()
export class AdminRepositoryAdapter implements AdminRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: number): Promise<AdminEntity | null> {
    const result = await this.prisma.admin.findFirst({
      where: { id },
    });
    return result ? AdminMapper.toEntity(result) : null;
  }

  async findByUserId(id: number): Promise<AdminEntity | null> {
    const result = await this.prisma.admin.findUnique({
      where: { id },
    });
    return result ? AdminMapper.toEntity(result) : null;
  }

  async getAll(): Promise<AdminEntity[] | null> {
    const result = await this.prisma.admin.findMany();
    return result.length ? AdminMapper.toEntityList(result) : null;
  }

  async countByUserId(id: number): Promise<number> {
    return this.prisma.admin.count({
      where: { id },
    });
  }

  async save(data: AdminEntity): Promise<AdminEntity> {
    const created = await this.prisma.admin.create({
      data: data,
    });
    return AdminMapper.toEntity(created);
  }

  async update(data: Partial<AdminEntity>): Promise<AdminEntity> {
    if (!data.id) {
      throw new Error('Admin ID is required to update');
    }

    const updated = await this.prisma.admin.update({
      where: { id: data.id },
      data: data,
    });

    return AdminMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.admin.delete({
      where: { id },
    });
  }
}
