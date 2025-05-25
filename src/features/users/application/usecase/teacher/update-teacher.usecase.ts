import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TeacherEntity } from '../../../domain/entities/teacher.entity';
import { TeacherService } from '../../service/teacher.service';

@Injectable()
export class UpdateTeacherUsecase
  implements UseCase<Partial<TeacherEntity>, TeacherEntity>
{
  constructor(private readonly service: TeacherService) {}

  async execute(input: Partial<TeacherEntity>): Promise<TeacherEntity> {
    const isExist: boolean = await this.service.checkTeacherExistence(
      input.id!,
    );
    if (!isExist) {
      throw new GoneException('Teacher does not exist');
    }

    return this.service.update(input);
  }
}
