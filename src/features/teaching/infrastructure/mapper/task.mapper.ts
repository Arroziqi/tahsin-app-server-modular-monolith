import { Task } from '@prisma/client';
import { TaskEntity } from '../../domain/entities/task.entity';

export class TaskMapper {
  static toEntity(raw: Task): TaskEntity {
    return new TaskEntity({
      id: raw.id,
      moduleId: raw.moduleId,
      teacherId: raw.teacherId,
      task: raw.task,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: Task[]): TaskEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
