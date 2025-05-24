import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ValidationService } from '../../../../../../common/services/validation/validation.service';
import { CreateAdminSchema } from '../../schema/admin/createAdmin.schema';

export class CreateAdminPipe implements PipeTransform {
  constructor() {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      return ValidationService.validate(CreateAdminSchema, value);
    } catch (err) {
      throw new BadRequestException(err, 'Validation failed');
    }
  }
}
