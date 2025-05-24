import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ValidationService } from '../../../../../../common/services/validation/validation.service';
import { CreateUserSchema } from '../../schema/user/createUser.schema';

export class CreateUserPipe implements PipeTransform {
  constructor() {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      return ValidationService.validate(CreateUserSchema, value);
    } catch (err) {
      throw new BadRequestException(err, 'Validation failed');
    }
  }
}
