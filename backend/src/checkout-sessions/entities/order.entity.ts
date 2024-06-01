export class Order {
  merchantId: string;
  aggregatorOrderId: string;
  description: string;
  billingInfo: {
    customerName: string;
    phoneNumber: string;
  };
  amountCents: number;
  paymentLink: string;
  createdAt: Date;
  updatedAt: Date;
  status: string;
}
