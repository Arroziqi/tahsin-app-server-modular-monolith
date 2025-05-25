import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { EnrollmentEntity } from '../../../domain/entities/enrollment.entity';
import { EnrollmentService } from '../../service/enrollment.service';

@Injectable()
export class CreateEnrollmentUsecase
  implements UseCase<EnrollmentEntity, EnrollmentEntity>
{
  constructor(private readonly service: EnrollmentService) {}

  async execute(input: EnrollmentEntity): Promise<EnrollmentEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('Enrollment already exists');
    }

    return this.service.create(input);
  }
}
