import { IsDateString, IsNumber, IsObject, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';
import { Order } from '../entities/order.entity';

export class CreateOrderDTO extends Order {
  @Exclude()
  @IsString()
  merchantId: string;

  @Exclude()
  @IsString()
  aggregatorOrderId: string;

  @IsString()
  description: string;

  @Exclude()
  @IsObject()
  billingInfo: {
    customerName: string;
    phoneNumber: string;
  };

  @Exclude()
  @IsNumber()
  amountCents: number;

  @IsString()
  paymentLink: string;

  @Exclude()
  @IsDateString()
  createdAt: Date;

  @Exclude()
  @IsDateString()
  updatedAt: Date;

  @Exclude()
  @IsString()
  status: string;

  constructor(partial: Partial<CreateOrderDTO>) {
    super();
    Object.assign(this, partial);
  }
}
