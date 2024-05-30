import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutSessionsModule } from './checkout-sessions/checkout-sessions.module';

@Module({
  imports: [CheckoutSessionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
