import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { AttendanceService } from '../../service/attendance.service';
import { AttendanceEntity } from '../../../domain/entities/attendance.entity';

@Injectable()
export class GetAttendanceUsecase
  implements UseCase<number, AttendanceEntity | null>
{
  constructor(private readonly service: AttendanceService) {}

  async execute(id: number): Promise<AttendanceEntity | null> {
    return await this.service.getAttendance(id);
  }
}
