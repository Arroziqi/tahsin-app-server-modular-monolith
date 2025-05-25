import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { AttendanceService } from '../../service/attendance.service';
import { AttendanceEntity } from '../../../domain/entities/attendance.entity';

@Injectable()
export class GetAllAttendanceUsecase
  implements UseCase<void, AttendanceEntity[] | null>
{
  constructor(private readonly service: AttendanceService) {}

  async execute(input: void): Promise<AttendanceEntity[] | null> {
    return await this.service.getAll();
  }
}
