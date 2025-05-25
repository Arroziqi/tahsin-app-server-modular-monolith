import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { StudentEntity } from '../../../domain/entities/student.entity';
import { StudentService } from '../../service/student.service';

@Injectable()
export class GetAllStudentUsecase
  implements UseCase<void, StudentEntity[] | null>
{
  constructor(private readonly service: StudentService) {}

  async execute(input: void): Promise<StudentEntity[] | null> {
    return await this.service.getAll();
  }
}
