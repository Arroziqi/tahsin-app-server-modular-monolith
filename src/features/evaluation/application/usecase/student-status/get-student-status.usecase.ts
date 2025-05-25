import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { StudentStatusService } from '../../service/student-status.service';
import { StudentStatusEntity } from '../../../domain/entities/student-status.entity';

@Injectable()
export class GetStudentStatusUsecase
  implements UseCase<number, StudentStatusEntity | null>
{
  constructor(private readonly service: StudentStatusService) {}

  async execute(id: number): Promise<StudentStatusEntity | null> {
    return await this.service.getStudentStatus(id);
  }
}
