import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ClassService } from '../../service/class.service';
import { ClassEntity } from '../../../domain/entities/class.entity';

@Injectable()
export class GetAllClassUsecase implements UseCase<void, ClassEntity[] | null> {
  constructor(private readonly service: ClassService) {}

  async execute(input: void): Promise<ClassEntity[] | null> {
    return await this.service.getAll();
  }
}
