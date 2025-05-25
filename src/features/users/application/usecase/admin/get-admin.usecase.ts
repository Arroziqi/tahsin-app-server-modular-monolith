import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { AdminEntity } from '../../../domain/entities/admin.entity';
import { AdminService } from '../../service/admin.service';

@Injectable()
export class GetAdminUsecase implements UseCase<number, AdminEntity | null> {
  constructor(private readonly service: AdminService) {}

  async execute(id: number): Promise<AdminEntity | null> {
    return await this.service.getAdmin(id);
  }
}
