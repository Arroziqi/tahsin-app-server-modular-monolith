import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { AdminService } from '../../service/admin.service';

@Injectable()
export class DeleteAdminUsecase
  implements UseCase<number, { message: string }>
{
  constructor(private readonly service: AdminService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist: boolean = await this.service.checkAdminExistence(input);
    if (!isExist) {
      throw new GoneException('Admin does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
