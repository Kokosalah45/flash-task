import { Body, Controller, Post } from '@nestjs/common';
import { CheckoutSessionsService } from './checkout-sessions.service';
import { isAuthedGuard } from 'src/auth/guards/auth.guard';

@Controller('checkout-sessions')
export class CheckoutSessionsController {
  constructor(
    private readonly checkoutSessionsService: CheckoutSessionsService,
  ) {}

  @isAuthedGuard()
  @Post()
  create(@Body() createCheckoutSessionDto) {
    const paymentToken = this.checkoutSessionsService.getPaymentToken();
  }
}
