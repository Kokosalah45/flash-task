import { Button } from '@/components/ui/button';
import { useFlashPayment } from '../FlashPaymentProvider';

export const FlashPaymentButton = () => {
  const { startPaymentSession } = useFlashPayment();
  return <Button onClick={startPaymentSession}>Pay With Flash</Button>;
};

export default FlashPaymentButton;
