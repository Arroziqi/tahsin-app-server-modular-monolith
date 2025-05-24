import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ValidationService } from '../../../../../../common/services/validation/validation.service';
import { UpdateAdminSchema } from '../../schema/admin/updateAdmin.schema';

export class UpdateAdminPipe implements PipeTransform {
  constructor() {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      return ValidationService.validate(UpdateAdminSchema, value);
    } catch (err) {
      throw new BadRequestException(err, 'Validation failed');
    }
  }
}
