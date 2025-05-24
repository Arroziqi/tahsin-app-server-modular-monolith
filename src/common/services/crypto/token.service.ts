import { v4 as uuid } from 'uuid';

export class TokenService {
  static generate(): string {
    return uuid();
  }
}
