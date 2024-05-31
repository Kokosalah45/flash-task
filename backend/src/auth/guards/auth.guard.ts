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
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = request.cookies['AUTH_TOKEN'];

    if (!token) {
      throw new UnauthorizedException();
    }
    const isValid = await this.authService.verifyToken(token);

    if (!isValid) {
      throw new UnauthorizedException();
    }
    return isValid;
  }
}
export const isAuthedGuard = () => UseGuards(AuthGuard);
