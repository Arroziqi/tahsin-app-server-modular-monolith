import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ValidationService } from '../../../../../../common/services/validation/validation.service';
import { CreateTeacherSchema } from '../../schema/teacher/createTeacher.schema';

export class CreateTeacherPipe implements PipeTransform {
  constructor(private readonly validator: ValidationService) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      return this.validator.validate(CreateTeacherSchema, value);
    } catch (err) {
      throw new BadRequestException('Validation failed', err);
    }
  }
}
