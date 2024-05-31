import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthGuard } from './guards/auth.guard';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('TOKEN_SECRET'),
          signOptions: {
            algorithm: config.get('TOKEN_HASH_METHOD'),
            expiresIn: config.get<string | number>('TOKEN_EXPIRATION'),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, AuthGuard, UsersService],
  exports: [AuthService, AuthGuard],
  controllers: [AuthController],
})
export class AuthModule {}
