import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { EnrollmentEntity } from '../../../domain/entities/enrollment.entity';
import { EnrollmentService } from '../../service/enrollment.service';

@Injectable()
export class GetEnrollmentUsecase
  implements UseCase<number, EnrollmentEntity | null>
{
  constructor(private readonly service: EnrollmentService) {}

  async execute(id: number): Promise<EnrollmentEntity | null> {
    return await this.service.getEnrollment(id);
  }
}
