import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenService {
  static generate(): string {
    return uuid();
  }
}
