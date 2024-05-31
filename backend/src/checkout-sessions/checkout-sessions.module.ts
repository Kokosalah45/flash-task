import { Module } from '@nestjs/common';
import { CheckoutSessionsService } from './checkout-sessions.service';
import { CheckoutSessionsController } from './checkout-sessions.controller';
import { ProductsModule } from 'src/products/products.module';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [CheckoutSessionsController],
  imports: [ProductsModule, UsersModule, AuthModule],
  providers: [CheckoutSessionsService],
})
export class CheckoutSessionsModule {}
