import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ZodType } from 'zod';
import { ValidationService } from '../services/validation/validation.service';

export class ValidationPipe implements PipeTransform {
  constructor(private readonly schema: ZodType<unknown>) {}

  transform(value: any, metadata: ArgumentMetadata) {
    try {
      return ValidationService.validate(this.schema, value);
    } catch (err) {
      throw new BadRequestException(err, 'Validation failed');
    }
  }
}
