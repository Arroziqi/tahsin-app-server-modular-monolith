import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TeacherEntity } from '../../../domain/entities/teacher.entity';
import { TeacherService } from '../../service/teacher.service';

@Injectable()
export class GetTeacherUsecase
  implements UseCase<number, TeacherEntity | null>
{
  constructor(private readonly service: TeacherService) {}

  async execute(id: number): Promise<TeacherEntity | null> {
    return await this.service.getTeacher(id);
  }
}
