import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { AttendanceService } from '../../service/attendance.service';

@Injectable()
export class DeleteAttendanceUsecase
  implements UseCase<number, { message: string }>
{
  constructor(private readonly service: AttendanceService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkDataExistence(input);
    if (!isExist) {
      throw new NotFoundException('Attendance does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
