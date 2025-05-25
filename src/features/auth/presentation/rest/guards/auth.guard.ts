import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import {
  IS_PUBLIC_KEY,
  X_API_TOKEN,
} from '../../../../../common/constants/key';
import { AuthService } from '../../../application/service/auth.service';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly authService: AuthService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic: boolean = this.reflector.getAllAndOverride<boolean>(
      IS_PUBLIC_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (isPublic) {
      return true;
    }

    const request: Request = context.switchToHttp().getRequest<Request>();
    const token: string | string[] | undefined =
      request.headers[X_API_TOKEN.toLowerCase()];

    if (!token) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const existingUser = await this.authService.getUserByToken(token as string);
    if (!existingUser) {
      throw new UnauthorizedException('Invalid credentials');
    }

    request['user'] = existingUser;

    return true;
  }
}
