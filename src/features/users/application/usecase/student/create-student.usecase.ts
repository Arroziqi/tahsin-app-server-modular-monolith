import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { StudentEntity } from '../../../domain/entities/student.entity';
import { StudentService } from '../../service/student.service';

@Injectable()
export class CreateStudentUsecase
  implements UseCase<StudentEntity, StudentEntity>
{
  constructor(private readonly service: StudentService) {}

  async execute(input: StudentEntity): Promise<StudentEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateStudentUserId(
      input.userId,
    );

    if (isDuplicate) {
      throw new ConflictException('Student already exists');
    }

    return this.service.create(input);
  }
}
