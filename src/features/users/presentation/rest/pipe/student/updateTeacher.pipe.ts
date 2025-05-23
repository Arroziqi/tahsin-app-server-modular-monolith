import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ValidationService } from '../../../../../../common/services/validation/validation.service';
import { UpdateTeacherSchema } from '../../schema/teacher/updateTeacher.schema';

export class UpdateTeacherPipe implements PipeTransform {
  constructor(private readonly validator: ValidationService) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      return this.validator.validate(UpdateTeacherSchema, value);
    } catch (err) {
      throw new BadRequestException('Validation failed', err);
    }
  }
}
