import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PaymentToken } from './interfaces/payment-token.interface';
import { CreateCheckoutSessionDTO } from './dto/create-checkout-session.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from 'src/auth/auth.service';
import { ProductsService } from 'src/products/products.service';
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
    // const userInfo = this.authService.verifyToken(userToken);

    // const products = this.productsService.getProductsByIds(
    //   createOrderDto.productIDs,
    // );

    // const totalAmount = products.reduce((acc, product) => {
    //   return acc + product.price;
    // }, 0);

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
    const randomPaymentToken = 'asoiszkghsdilhufgb';
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
        createdAt: '2023-08-06T18:14:55.230Z',
        updatedAt: '2023-08-06T18:14:55.230Z',
        status: 'pending',
      },
    };
    // delete payment link
    // save order status to db
    return {
      paymentLink: data.order.paymentLink,
    };
  }
}
