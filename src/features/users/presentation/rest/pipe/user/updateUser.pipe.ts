import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ValidationService } from '../../../../../../common/services/validation/validation.service';
import { UpdateUserSchema } from '../../schema/user/updateUser.schema';

export class UpdateUserPipe implements PipeTransform {
  constructor() {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      return ValidationService.validate(UpdateUserSchema, value);
    } catch (err) {
      throw new BadRequestException(err, 'Validation failed');
    }
  }
}
