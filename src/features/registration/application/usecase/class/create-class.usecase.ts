import { ConflictException, Injectable } from '@nestjs/common';
import { UseCase } from '../../../../../common/types/usecase';
import { ClassService } from '../../service/class.service';
import { ClassEntity } from '../../../domain/entities/class.entity';

@Injectable()
export class CreateClassUsecase implements UseCase<ClassEntity, ClassEntity> {
  constructor(private readonly service: ClassService) {}

  async execute(input: ClassEntity): Promise<ClassEntity> {
    const isDuplicate: boolean = await this.service.checkDuplicateData(input);

    if (isDuplicate) {
      throw new ConflictException('Class already exists');
    }

    return this.service.create(input);
  }
}
