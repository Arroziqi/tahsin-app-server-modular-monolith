import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { StudentStatusEntity } from '../../../domain/entities/student-status.entity';
import { StudentStatusService } from '../../service/student-status.service';

@Injectable()
export class GetAllStudentStatusUsecase
  implements UseCase<void, StudentStatusEntity[] | null>
{
  constructor(private readonly service: StudentStatusService) {}

  async execute(input: void): Promise<StudentStatusEntity[] | null> {
    return await this.service.getAll();
  }
}
