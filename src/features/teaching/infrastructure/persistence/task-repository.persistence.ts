import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { TaskMapper } from '../mapper/task.mapper';
import { TaskRepositoryPort } from '../../domain/ports/task-repository.port';
import { TaskEntity } from '../../domain/entities/task.entity';

@Injectable()
export class TaskRepositoryPersistence implements TaskRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: TaskEntity): Promise<number> {
    return this.prisma.task.count({
      where: data,
    });
  }

  async findById(id: number): Promise<TaskEntity | null> {
    const result = await this.prisma.task.findFirst({
      where: { id },
    });
    return result ? TaskMapper.toEntity(result) : null;
  }

  async getAll(): Promise<TaskEntity[] | null> {
    const result = await this.prisma.task.findMany();
    return result.length ? TaskMapper.toEntityList(result) : null;
  }

  async save(data: TaskEntity): Promise<TaskEntity> {
    const created = await this.prisma.task.create({
      data: data,
    });
    return TaskMapper.toEntity(created);
  }

  async update(data: Partial<TaskEntity>): Promise<TaskEntity> {
    if (!data.id) {
      throw new Error('Task ID is required to update');
    }

    const updated = await this.prisma.task.update({
      where: { id: data.id },
      data: data,
    });

    return TaskMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.task.delete({
      where: { id },
    });
  }
}
