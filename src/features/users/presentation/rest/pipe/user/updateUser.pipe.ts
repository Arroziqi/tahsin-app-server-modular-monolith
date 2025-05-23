import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ValidationService } from '../../../../../../common/services/validation/validation.service';
import { UpdateUserSchema } from '../../schema/user/updateUser.schema';

export class UpdateUserPipe implements PipeTransform {
  constructor(private readonly validator: ValidationService) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      return this.validator.validate(UpdateUserSchema, value);
    } catch (err) {
      throw new BadRequestException('Validation failed', err);
    }
  }
}
