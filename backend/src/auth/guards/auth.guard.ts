import { CanActivate, ExecutionContext, UnauthorizedException, UseGuards } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly jwtService : JwtService) {}
    async canActivate(context: ExecutionContext){
        const request = context.switchToHttp().getRequest();
        const token = request.cookies['token'];
        if (!token) {
            throw new UnauthorizedException();
        }
        const isValid = await this.jwtService.verifyAsync(token);

        if (!isValid) {
            throw new UnauthorizedException();
        }
        return isValid;
    }
}
 export const  isAuthedGuard = () => UseGuards(AuthGuard);

