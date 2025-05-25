import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { EnrollmentEntity } from '../../../domain/entities/enrollment.entity';
import { EnrollmentService } from '../../service/enrollment.service';

@Injectable()
export class GetAllEnrollmentUsecase
  implements UseCase<void, EnrollmentEntity[] | null>
{
  constructor(private readonly service: EnrollmentService) {}

  async execute(input: void): Promise<EnrollmentEntity[] | null> {
    return await this.service.getAll();
  }
}
