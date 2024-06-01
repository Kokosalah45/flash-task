import Page from '@/components/layout/Page';
import { FlashPaymentProvider } from '@/features/FlashPayment/FlashPaymentProvider';
import FlashPaymentButton from '@/features/FlashPayment/components/FlashPaymentButton';
import FlashPaymentModal from '@/features/FlashPayment/components/FlashPaymentEmbeddedCheckout';
import { startCheckoutSession } from '@/services/data/checkout-session/startCheckoutSession';

const CheckoutPage = () => {
  return (
    <Page className="flex justify-center items-center">
      <div className="flex border-2 border-gray-300 p-5 rounded-md">
        <div>
          <h3>Pay for your items</h3>
          <div>
            <h2>Items</h2>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
            <p>there's items here 😉 😉 😉 😉</p>
          </div>
        </div>
        <div>
          <h3 className="mb-5">payment vendors</h3>
          <div>
            <FlashPaymentProvider fetchPromise={startCheckoutSession}>
              <FlashPaymentButton />
              <FlashPaymentModal />
            </FlashPaymentProvider>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default CheckoutPage;
