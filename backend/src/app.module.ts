import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CheckoutSessionsModule } from './checkout-sessions/checkout-sessions.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppService } from './app.service';
import { join } from 'path';

@Module({
  imports: [
    CheckoutSessionsModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    UsersModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
