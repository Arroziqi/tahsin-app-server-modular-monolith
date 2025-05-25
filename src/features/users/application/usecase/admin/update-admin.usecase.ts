import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { AdminEntity } from '../../../domain/entities/admin.entity';
import { AdminService } from '../../service/admin.service';

@Injectable()
export class UpdateAdminUsecase
  implements UseCase<Partial<AdminEntity>, AdminEntity>
{
  constructor(private readonly service: AdminService) {}

  async execute(input: Partial<AdminEntity>): Promise<AdminEntity> {
    const isExist: boolean = await this.service.checkAdminExistence(input.id!);
    if (!isExist) {
      throw new GoneException('Admin does not exist');
    }

    return this.service.update(input);
  }
}
