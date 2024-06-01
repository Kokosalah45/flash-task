import { baseRouter } from '../base-router';

type Order = {
  order: { paymentLink: string; id: number; description: string };
};
export const startCheckoutSession = async () => {
  const response = await baseRouter.post('checkout-sessions', {
    credentials: 'include',
    json: {
      productIDs: [1, 2, 3],
      currency: 'usd',
    },
  });
  const { order } = await response.json<Order>();

  return order.paymentLink;
};
