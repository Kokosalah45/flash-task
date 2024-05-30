import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PaymentToken } from './interfaces/payment-token.interface';

@Injectable()
export class CheckoutSessionsService {
  constructor(private readonly configService: ConfigService) {}

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
}
