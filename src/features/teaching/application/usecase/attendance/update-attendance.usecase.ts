import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { AttendanceEntity } from '../../../domain/entities/attendance.entity';
import { AttendanceService } from '../../service/attendance.service';

@Injectable()
export class UpdateAttendanceUsecase
  implements UseCase<Partial<AttendanceEntity>, AttendanceEntity>
{
  constructor(private readonly service: AttendanceService) {}

  async execute(input: Partial<AttendanceEntity>): Promise<AttendanceEntity> {
    const isExist: boolean = await this.service.checkDataExistence(input.id!);
    if (!isExist) {
      throw new GoneException('Attendance does not exist');
    }

    return this.service.update(input);
  }
}
