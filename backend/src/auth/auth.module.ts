import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthGuard } from './guards/auth.guard';
import { UsersService } from 'src/users/users.service';

@Module({
  providers: [AuthService, AuthGuard, UsersService],
  exports : [AuthService ],
  controllers: [AuthController]
})
export class AuthModule {}
