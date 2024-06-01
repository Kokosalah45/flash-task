import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PaymentToken } from './entities/payment-token.entity';
import { CreateCheckoutSessionDTO } from './dto/create-checkout-session-body.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from 'src/auth/auth.service';
import { ProductsService } from 'src/products/products.service';
import { randomBytes } from 'node:crypto';
@Injectable()
export class CheckoutSessionsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UsersService,
    private readonly authService: AuthService,
    private readonly productsService: ProductsService,
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
    // const aggregatorID = this.configService.get('AGGREGATOR_ID');
    // const merhcantID = this.configService.get('MERCHANT_ID');
    // const userInfo = await this.authService.verifyToken(userToken);

    // const products = this.productsService.getProductsByIds(
    //   createOrderDto.productIDs,
    // );

    // const totalAmount = products.reduce((acc, product) => {
    //   return acc + product.price;
    // }, 0);

    // let billingInfo = {};

    // if (userInfo) {
    //   billingInfo = {
    //     customerName: userInfo.name,
    //     phoneNumber: userInfo.phone_number,
    //   };
    // }
    // const body = {
    //   merchantId: '405840',
    //   aggregatorOrderId: '345201231',
    //   description: 'description',
    //   billingInfo,
    //   amountCents: 100,
    // };

    // const order = await fetch('dummy-url', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${paymentToken}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(body),
    // });

    // if (!session.ok) {
    //   throw new ServiceUnavailableException();
    // }
    // const data = await order.json();

    const randomPaymentToken = randomBytes(32).toString('hex');
    const data = {
      order: {
        id: '927592534',
        merchantId: '405840',
        aggregatorOrderId: '345201231',
        description: 'description',
        billingInfo: {
          customerName: 'kerolous',
          phoneNumber: '01211111111',
        },
        amountCents: 100,
        paymentLink: `http://localhost:3000/mocks/payment-gateway/?token=${randomPaymentToken}`,
        createdAt: new Date('2023-08-06T18:14:55.230Z'),
        updatedAt: new Date('2023-08-06T18:14:55.230Z'),
        status: 'pending',
      },
    };

    return data;
  }
}
