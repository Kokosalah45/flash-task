import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PaymentToken } from './interfaces/payment-token.interface';
import { CreateCheckoutSessionDTO } from './dto/create-checkout-session.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CheckoutSessionsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async getPaymentToken(): Promise<PaymentToken> {
    // const clientID = this.configService.get('PAYMENT_CLIENT_ID');
    // const clientSecret = this.configService.get('PAYMENT_CLIENT_SECRET');

    // const base64EncodedKey = Buffer.from(
    //   `${clientID}:${clientSecret}`,
    // ).toString('base64');

    // const token = await fetch('dummy-url', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Basic ${base64EncodedKey}`,
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: 'grant_type=client_credentials',
    // });

    // if (!token.ok) {
    //   throw new ServiceUnavailableException();
    // }

    // const tokenData = await token.json();

    return {
      access_token: 'oeuhgpbababvubaubvapudbf',
      expires_in: 3600,
      token_type: 'Bearer',
    };
  }

  async createOrder(
    createOrderDto: CreateCheckoutSessionDTO,
    paymentToken: string,
    userToken: string,
  ) {
    // HERE I SHOULD GET THE PRODUCT IDS
    // QUERY THE DATABASE FOR THE PRODUCTS
    // CALCULATE THE TOTAL AMOUNT
    // CREATE AN ORDER
    // SEND THE ORDER TO THE PAYMENT GATEWAY

    const userInfo = this.jwtService.verify(userToken);

    // const order = await fetch('dummy-url', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${paymentToken}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(createOrderDto),
    // });
    // if (!session.ok) {
    //   throw new ServiceUnavailableException();
    // }
    // const data = await order.json();
    const data = {
      order: {
        id: 'string',
        merchantId: 'string',
        aggregatorOrderId: 'string',
        description: 'string',
        billingInfo: {
          customerName: 'string',
          phoneNumber: 'string',
        },
        amountCents: 100,
        paymentLink: 'https://payments.example.com/JSXET',
        createdAt: '2023-08-06T18:14:55.230Z',
        updatedAt: '2023-08-06T18:14:55.230Z',
        status: 'pending',
      },
    };
    return data;
  }
}
