import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { EnrollmentEntity } from '../../domain/entities/enrollment.entity';
import { EnrollmentRepositoryPort } from '../../domain/ports/enrollment-repository.port';
import { EnrollmentMapper } from '../mapper/enrollment.mapper';

@Injectable()
export class EnrollmentRepositoryPersistence
  implements EnrollmentRepositoryPort
{
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: EnrollmentEntity): Promise<number> {
    return this.prisma.enrollment.count({
      where: data,
    });
  }

  async findById(id: number): Promise<EnrollmentEntity | null> {
    const result = await this.prisma.enrollment.findFirst({
      where: { id },
    });
    return result ? EnrollmentMapper.toEntity(result) : null;
  }

  async getAll(): Promise<EnrollmentEntity[] | null> {
    const result = await this.prisma.enrollment.findMany();
    return result.length ? EnrollmentMapper.toEntityList(result) : null;
  }

  async save(data: EnrollmentEntity): Promise<EnrollmentEntity> {
    const created = await this.prisma.enrollment.create({
      data: data,
    });
    return EnrollmentMapper.toEntity(created);
  }

  async update(data: Partial<EnrollmentEntity>): Promise<EnrollmentEntity> {
    if (!data.id) {
      throw new Error('Enrollment ID is required to update');
    }

    const updated = await this.prisma.enrollment.update({
      where: { id: data.id },
      data: data,
    });

    return EnrollmentMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.enrollment.delete({
      where: { id },
    });
  }
}
