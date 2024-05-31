import { Body, Controller, Post, Req } from '@nestjs/common';
import { CheckoutSessionsService } from './checkout-sessions.service';
import { isAuthedGuard } from 'src/auth/guards/auth.guard';
import { CreateCheckoutSessionDTO } from './dto/create-checkout-session.dto';
import { Request } from 'express';

@Controller('checkout-sessions')
export class CheckoutSessionsController {
  constructor(
    private readonly checkoutSessionsService: CheckoutSessionsService,
  ) {}

  @isAuthedGuard()
  @Post()
  async create(
    @Body()
    createCheckoutSessionDto: CreateCheckoutSessionDTO,
    @Req() req: Request,
  ) {
    const paymentToken = await this.checkoutSessionsService.getPaymentToken();

    const userToken = req.cookies['token'];

    const orderData = await this.checkoutSessionsService.createOrder(
      createCheckoutSessionDto,
      paymentToken.access_token,
      userToken,
    );

    return orderData;
  }
}
