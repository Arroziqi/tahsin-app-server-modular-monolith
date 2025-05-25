import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { AdminEntity } from '../../../domain/entities/admin.entity';
import { AdminService } from '../../service/admin.service';

@Injectable()
export class CreateAdminUsecase implements UseCase<AdminEntity, AdminEntity> {
  constructor(private readonly service: AdminService) {}

  async execute(input: AdminEntity): Promise<AdminEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateAdminUserId(
      input.userId,
    );

    if (isDuplicate) {
      throw new ConflictException('Admin already exists');
    }

    return this.service.create(input);
  }
}
