import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { StudentStatusMapper } from '../mapper/student-status.mapper';
import { StudentStatusRepositoryPort } from '../../domain/ports/student-status-repository.port';
import { StudentStatusEntity } from '../../domain/entities/student-status.entity';

@Injectable()
export class StudentStatusRepositoryPersistence
  implements StudentStatusRepositoryPort
{
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: StudentStatusEntity): Promise<number> {
    return this.prisma.studentStatus.count({
      where: data,
    });
  }

  async findById(id: number): Promise<StudentStatusEntity | null> {
    const result = await this.prisma.studentStatus.findFirst({
      where: { id },
    });
    return result ? StudentStatusMapper.toEntity(result) : null;
  }

  async getAll(): Promise<StudentStatusEntity[] | null> {
    const result = await this.prisma.studentStatus.findMany();
    return result.length ? StudentStatusMapper.toEntityList(result) : null;
  }

  async save(data: StudentStatusEntity): Promise<StudentStatusEntity> {
    const created = await this.prisma.studentStatus.create({
      data: data,
    });
    return StudentStatusMapper.toEntity(created);
  }

  async update(
    data: Partial<StudentStatusEntity>,
  ): Promise<StudentStatusEntity> {
    if (!data.id) {
      throw new Error('StudentStatus ID is required to update');
    }

    const updated = await this.prisma.studentStatus.update({
      where: { id: data.id },
      data: data,
    });

    return StudentStatusMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.studentStatus.delete({
      where: { id },
    });
  }
}
