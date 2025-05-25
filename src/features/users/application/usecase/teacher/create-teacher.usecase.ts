import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TeacherEntity } from '../../../domain/entities/teacher.entity';
import { TeacherService } from '../../service/teacher.service';

@Injectable()
export class CreateTeacherUsecase
  implements UseCase<TeacherEntity, TeacherEntity>
{
  constructor(private readonly service: TeacherService) {}

  async execute(input: TeacherEntity): Promise<TeacherEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateTeacherUserId(
      input.userId,
    );

    if (isDuplicate) {
      throw new ConflictException('Teacher already exists');
    }

    return this.service.create(input);
  }
}
