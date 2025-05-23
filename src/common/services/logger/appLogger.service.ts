import { Injectable, Logger, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class AppLoggerService extends Logger {
  constructor(context?: string) {
    super(context || 'App');
  }
}
