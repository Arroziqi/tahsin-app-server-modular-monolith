import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';

@Injectable()
export class HasherService {
  async hash(password: string): Promise<string> {
    return await argon.hash(password);
  }

  async verify(password: string, hash: string): Promise<boolean> {
    return await argon.verify(hash, password);
  }
}
