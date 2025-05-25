import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { StudentService } from '../../service/student.service';

@Injectable()
export class DeleteStudentUsecase
  implements UseCase<number, { message: string }>
{
  constructor(private readonly service: StudentService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkStudentExistence(input);
    if (!isExist) {
      throw new GoneException('Student does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
