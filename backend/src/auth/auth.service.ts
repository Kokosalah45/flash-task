import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SiginDTO } from './dtos/sigin-dto';

@Injectable()
export class AuthService {
 
    constructor(private readonly userService : UsersService, private readonly jwtService : JwtService) {}

    async signIn(payload : SiginDTO) {
       
            const user = this.userService.findOneByEmail(payload.email);
            if (!user || user.password !== payload.password) {
                throw new UnauthorizedException('Invalid credentials');
            }
            const accessToken = await this.jwtService.signAsync(user);

            return {
                access_token : accessToken,
                user
            }

        
    }

 async veriyToken(token : string) {
        try {
            const payload = await this.jwtService.verifyAsync(token);
            return payload;
        }catch (error) {
            return null;
        }
    }

    

}
