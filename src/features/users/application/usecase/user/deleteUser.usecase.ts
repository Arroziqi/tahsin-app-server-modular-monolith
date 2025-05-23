import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { UserService } from '../../../domain/services/user.service';

@Injectable()
export class DeleteUserUsecase implements UseCase<number, void> {
  constructor(private readonly service: UserService) {}

  async execute(input: number): Promise<void> {
    const isExist = await this.service.checkUserExistence(input);
    if (!isExist) {
      throw new GoneException('User does not exist');
    }

    return await this.service.delete(input);
  }
}
