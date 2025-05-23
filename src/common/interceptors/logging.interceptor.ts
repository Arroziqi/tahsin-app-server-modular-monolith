import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Request } from 'express';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger: Logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest<Request>();
    const method: string = req.method;
    const url: string = req.url;

    const handler: string = context.getHandler().name;
    const controller: string = context.getClass().name;

    const now: number = Date.now();

    this.logger.log(`➡️  ${method} ${url} [${controller}.${handler}] - Start`);

    return next.handle().pipe(
      tap((): void => {
        const ms: number = Date.now() - now;
        this.logger.log(
          `✅  ${method} ${url} [${controller}.${handler}] - Done in ${ms}ms`,
        );
      }),
      catchError((err) => {
        const ms: number = Date.now() - now;
        this.logger.error(
          `❌  ${method} ${url} [${controller}.${handler}] - Failed in ${ms}ms`,
        );
        throw err;
      }),
    );
  }
}
