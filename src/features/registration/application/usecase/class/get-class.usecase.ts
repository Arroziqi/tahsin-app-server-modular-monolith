import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ClassService } from '../../service/class.service';
import { ClassEntity } from '../../../domain/entities/class.entity';

@Injectable()
export class GetClassUsecase implements UseCase<number, ClassEntity | null> {
  constructor(private readonly service: ClassService) {}

  async execute(id: number): Promise<ClassEntity | null> {
    return await this.service.getClass(id);
  }
}
