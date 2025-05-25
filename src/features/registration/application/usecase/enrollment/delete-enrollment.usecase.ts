import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { EnrollmentService } from '../../service/enrollment.service';

@Injectable()
export class DeleteEnrollmentUsecase
  implements UseCase<number, { message: string }>
{
  constructor(private readonly service: EnrollmentService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkDataExistence(input);
    if (!isExist) {
      throw new NotFoundException('Enrollment does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
