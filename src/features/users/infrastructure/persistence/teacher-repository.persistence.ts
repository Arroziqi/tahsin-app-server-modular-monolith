import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { TeacherEntity } from '../../domain/entities/teacher.entity';
import { TeacherRepositoryPort } from '../../domain/ports/teacher-repository.port';
import { TeacherMapper } from '../mapper/teacher.mapper';

@Injectable()
export class TeacherRepositoryAdapter implements TeacherRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: number): Promise<TeacherEntity | null> {
    const result = await this.prisma.teacher.findFirst({
      where: { id },
    });
    return result ? TeacherMapper.toEntity(result) : null;
  }

  async findByUserId(id: number): Promise<TeacherEntity | null> {
    const result = await this.prisma.teacher.findUnique({
      where: { id },
    });
    return result ? TeacherMapper.toEntity(result) : null;
  }

  async getAll(): Promise<TeacherEntity[] | null> {
    const result = await this.prisma.teacher.findMany();
    return result.length ? TeacherMapper.toEntityList(result) : null;
  }

  async countByUserId(id: number): Promise<number> {
    return this.prisma.teacher.count({
      where: { id },
    });
  }

  async save(data: TeacherEntity): Promise<TeacherEntity> {
    const created = await this.prisma.teacher.create({
      data: data,
    });
    return TeacherMapper.toEntity(created);
  }

  async update(data: Partial<TeacherEntity>): Promise<TeacherEntity> {
    if (!data.id) {
      throw new Error('Teacher ID is required to update');
    }

    const updated = await this.prisma.teacher.update({
      where: { id: data.id },
      data: data,
    });

    return TeacherMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.teacher.delete({
      where: { id },
    });
  }
}
