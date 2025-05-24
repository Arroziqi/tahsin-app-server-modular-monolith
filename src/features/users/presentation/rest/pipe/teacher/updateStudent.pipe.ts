import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ValidationService } from '../../../../../../common/services/validation/validation.service';
import { UpdateStudentSchema } from '../../schema/student/updateStudent.schema';

export class UpdateStudentPipe implements PipeTransform {
  constructor() {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      return ValidationService.validate(UpdateStudentSchema, value);
    } catch (err) {
      throw new BadRequestException(err, 'Validation failed');
    }
  }
}
