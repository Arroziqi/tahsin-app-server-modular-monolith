import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ValidationService } from '../../../../../../common/services/validation/validation.service';
import { UpdateAdminSchema } from '../../schema/admin/updateAdmin.schema';

export class UpdateAdminPipe implements PipeTransform {
  constructor(private readonly validator: ValidationService) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      return this.validator.validate(UpdateAdminSchema, value);
    } catch (err) {
      throw new BadRequestException('Validation failed', err);
    }
  }
}
