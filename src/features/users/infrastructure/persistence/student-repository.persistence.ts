import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { StudentMapper } from '../mapper/student.mapper';
import { StudentRepositoryPort } from '../../domain/ports/student-repository.port';
import { StudentEntity } from '../../domain/entities/student.entity';

@Injectable()
export class StudentRepositoryAdapter implements StudentRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: number): Promise<StudentEntity | null> {
    const result = await this.prisma.student.findFirst({
      where: { id },
    });
    return result ? StudentMapper.toEntity(result) : null;
  }

  async findByUserId(id: number): Promise<StudentEntity | null> {
    const result = await this.prisma.student.findUnique({
      where: { id },
    });
    return result ? StudentMapper.toEntity(result) : null;
  }

  async getAll(): Promise<StudentEntity[] | null> {
    const result = await this.prisma.student.findMany();
    return result.length ? StudentMapper.toEntityList(result) : null;
  }

  async countByUserId(id: number): Promise<number> {
    return this.prisma.student.count({
      where: { id },
    });
  }

  async save(data: StudentEntity): Promise<StudentEntity> {
    const created = await this.prisma.student.create({
      data: data,
    });
    return StudentMapper.toEntity(created);
  }

  async update(data: Partial<StudentEntity>): Promise<StudentEntity> {
    if (!data.id) {
      throw new Error('Student ID is required to update');
    }

    const updated = await this.prisma.student.update({
      where: { id: data.id },
      data: data,
    });

    return StudentMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.student.delete({
      where: { id },
    });
  }
}
