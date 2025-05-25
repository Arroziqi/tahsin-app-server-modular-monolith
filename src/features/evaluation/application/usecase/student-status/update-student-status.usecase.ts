import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { StudentStatusEntity } from '../../../domain/entities/student-status.entity';
import { StudentStatusService } from '../../service/student-status.service';

@Injectable()
export class UpdateStudentStatusUsecase
  implements UseCase<Partial<StudentStatusEntity>, StudentStatusEntity>
{
  constructor(private readonly service: StudentStatusService) {}

  async execute(
    input: Partial<StudentStatusEntity>,
  ): Promise<StudentStatusEntity> {
    const isExist: boolean = await this.service.checkDataExistence(input.id!);
    if (!isExist) {
      throw new GoneException('StudentStatus does not exist');
    }

    return this.service.update(input);
  }
}
