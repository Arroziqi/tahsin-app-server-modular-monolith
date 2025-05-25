import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { EnrollmentEntity } from '../../../domain/entities/enrollment.entity';
import { EnrollmentService } from '../../service/enrollment.service';

@Injectable()
export class UpdateEnrollmentUsecase
  implements UseCase<Partial<EnrollmentEntity>, EnrollmentEntity>
{
  constructor(private readonly service: EnrollmentService) {}

  async execute(input: Partial<EnrollmentEntity>): Promise<EnrollmentEntity> {
    const isExist: boolean = await this.service.checkDataExistence(input.id!);
    if (!isExist) {
      throw new GoneException('Enrollment does not exist');
    }

    return this.service.update(input);
  }
}
