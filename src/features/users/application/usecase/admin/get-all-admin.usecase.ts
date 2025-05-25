import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { AdminEntity } from '../../../domain/entities/admin.entity';
import { AdminService } from '../../service/admin.service';

@Injectable()
export class GetAllAdminUsecase implements UseCase<void, AdminEntity[] | null> {
  constructor(private readonly service: AdminService) {}

  async execute(input: void): Promise<AdminEntity[] | null> {
    return await this.service.getAll();
  }
}
