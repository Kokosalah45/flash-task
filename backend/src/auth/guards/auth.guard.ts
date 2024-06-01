import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.cookies['AUTH_TOKEN'];

    if (!token) {
      throw new UnauthorizedException();
    }

    const user = await this.authService.getUser(token);

    if (user === null) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
export const isAuthedGuard = () => UseGuards(AuthGuard);
