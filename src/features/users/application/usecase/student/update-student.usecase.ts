import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { StudentEntity } from '../../../domain/entities/student.entity';
import { StudentService } from '../../service/student.service';

@Injectable()
export class UpdateStudentUsecase
  implements UseCase<Partial<StudentEntity>, StudentEntity>
{
  constructor(private readonly service: StudentService) {}

  async execute(input: Partial<StudentEntity>): Promise<StudentEntity> {
    const isExist: boolean = await this.service.checkStudentExistence(
      input.id!,
    );
    if (!isExist) {
      throw new GoneException('Student does not exist');
    }

    return this.service.update(input);
  }
}
