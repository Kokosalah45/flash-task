import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { CheckoutSessionsService } from './checkout-sessions.service';
import { isAuthedGuard } from 'src/auth/guards/auth.guard';
import { CreateCheckoutSessionDTO } from './dto/create-checkout-session-body.dto';
import { Request } from 'express';
import { CreateOrderDTO } from './dto/created-order.dto';

@Controller('checkout-sessions')
@UseInterceptors(ClassSerializerInterceptor)
@isAuthedGuard()
export class CheckoutSessionsController {
  constructor(
    private readonly checkoutSessionsService: CheckoutSessionsService,
  ) {}

  @Post()
  async create(
    @Req() req: Request,
    @Body() createCheckoutSessionDto: CreateCheckoutSessionDTO,
  ) {
    const paymentToken = await this.checkoutSessionsService.getPaymentToken();
    const userToken = req.cookies['AUTH_TOKEN'];

    const data = await this.checkoutSessionsService.createOrder(
      createCheckoutSessionDto,
      paymentToken.access_token,
      userToken,
    );

    const createdOrderDTO = new CreateOrderDTO(data.order);

    return {
      order: createdOrderDTO,
    };
  }
}
