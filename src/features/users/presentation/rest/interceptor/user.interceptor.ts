import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { UserResponseMapper } from '../mapper/userResponse.mapper';
import { UserEntity } from '../../../domain/entities/user.entity';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((response: unknown) => {
        if (response) {
          const data = response as UserEntity | UserEntity[];
          if (Array.isArray(data)) {
            response = data.map((item: UserEntity) =>
              UserResponseMapper.exceptPassword(item),
            );
          } else {
            response = UserResponseMapper.exceptPassword(data);
          }
        }
        return response;
      }),
    );
  }
}
