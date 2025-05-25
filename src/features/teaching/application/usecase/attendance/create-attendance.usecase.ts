import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { AttendanceEntity } from '../../../domain/entities/attendance.entity';
import { AttendanceService } from '../../service/attendance.service';

@Injectable()
export class CreateAttendanceUsecase
  implements UseCase<AttendanceEntity, AttendanceEntity>
{
  constructor(private readonly service: AttendanceService) {}

  async execute(input: AttendanceEntity): Promise<AttendanceEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('Attendance already exists');
    }

    return this.service.create(input);
  }
}
