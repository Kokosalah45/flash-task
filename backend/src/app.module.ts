import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutSessionsModule } from './checkout-sessions/checkout-sessions.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';


const configService = new ConfigService();

@Module({
  imports: [CheckoutSessionsModule, AuthModule , ConfigModule.forRoot(
    {isGlobal : true}
  ),  
  JwtModule.register({
    global: true,
    secret: configService.get('TOKEN_SECRET'),
    signOptions: { expiresIn: configService.get('TOKEN_EXPIRATION') , algorithm: configService.get('TOKEN_HASH_METHOD')},
  }), UsersModule,],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
