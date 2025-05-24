import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { UserService } from '../../service/user.service';

@Injectable()
export class DeleteUserUsecase implements UseCase<number, { message: string }> {
  constructor(private readonly service: UserService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkUserExistence(input);
    if (!isExist) {
      throw new GoneException('User does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
