import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { StudentStatusService } from '../../service/student-status.service';

@Injectable()
export class DeleteStudentStatusUsecase
  implements UseCase<number, { message: string }>
{
  constructor(private readonly service: StudentStatusService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkDataExistence(input);
    if (!isExist) {
      throw new NotFoundException('StudentStatus does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
