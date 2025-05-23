import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ValidationService } from '../../../../../../common/services/validation/validation.service';
import { UpdateStudentSchema } from '../../schema/student/updateStudent.schema';

export class UpdateStudentPipe implements PipeTransform {
  constructor(private readonly validator: ValidationService) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      return this.validator.validate(UpdateStudentSchema, value);
    } catch (err) {
      throw new BadRequestException('Validation failed', err);
    }
  }
}
