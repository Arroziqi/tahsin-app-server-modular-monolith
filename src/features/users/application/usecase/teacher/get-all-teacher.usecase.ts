import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TeacherEntity } from '../../../domain/entities/teacher.entity';
import { TeacherService } from '../../service/teacher.service';

@Injectable()
export class GetAllTeacherUsecase
  implements UseCase<void, TeacherEntity[] | null>
{
  constructor(private readonly service: TeacherService) {}

  async execute(input: void): Promise<TeacherEntity[] | null> {
    return await this.service.getAll();
  }
}
