import { Injectable } from '@nestjs/common';


@Injectable()
export class CheckoutSessionsService {
  create(createCheckoutSessionDto) {
    return 'This action adds a new checkoutSession';
  }

  findAll() {
    return `This action returns all checkoutSessions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} checkoutSession`;
  }

  update(id: number) {
    return `This action updates a #${id} checkoutSession`;
  }

  remove(id: number) {
    return `This action removes a #${id} checkoutSession`;
  }
}
