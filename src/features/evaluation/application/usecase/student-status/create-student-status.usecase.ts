import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { StudentStatusService } from '../../service/student-status.service';
import { StudentStatusEntity } from '../../../domain/entities/student-status.entity';

@Injectable()
export class CreateStudentStatusUsecase
  implements UseCase<StudentStatusEntity, StudentStatusEntity>
{
  constructor(private readonly service: StudentStatusService) {}

  async execute(input: StudentStatusEntity): Promise<StudentStatusEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('StudentStatus already exists');
    }

    return this.service.create(input);
  }
}
