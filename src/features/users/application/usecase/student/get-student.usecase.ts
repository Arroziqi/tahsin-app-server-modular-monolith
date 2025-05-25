import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { StudentService } from '../../service/student.service';
import { StudentEntity } from '../../../domain/entities/student.entity';

@Injectable()
export class GetStudentUsecase
  implements UseCase<number, StudentEntity | null>
{
  constructor(private readonly service: StudentService) {}

  async execute(id: number): Promise<StudentEntity | null> {
    return await this.service.getStudent(id);
  }
}
