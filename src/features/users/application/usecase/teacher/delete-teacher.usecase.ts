import { GoneException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { TeacherService } from '../../service/teacher.service';

@Injectable()
export class DeleteTeacherUsecase
  implements UseCase<number, { message: string }>
{
  constructor(private readonly service: TeacherService) {}

  async execute(input: number): Promise<{ message: string }> {
    const isExist = await this.service.checkTeacherExistence(input);
    if (!isExist) {
      throw new GoneException('Teacher does not exist');
    }
    await this.service.delete(input);
    return { message: 'OK' };
  }
}
