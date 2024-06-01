import { createContext, useContext, useState } from 'react';

type FlashPaymentContextType = {
  startPaymentSession: () => void;
  cancelPayment: () => void;
  paymentLink: string;
};

const FlashPaymentContext = createContext<FlashPaymentContextType | null>(null);

export const useFlashPayment = () => {
  const context = useContext(FlashPaymentContext);
  if (!context) {
    throw new Error(
      'useFlashPayment must be used within a FlashPaymentProvider'
    );
  }
  return context;
};

type FlashPaymentProviderProps = {
  fetchPromise: () => Promise<string>;
  children: React.ReactNode;
};

export const FlashPaymentProvider = ({
  children,
  fetchPromise,
}: FlashPaymentProviderProps) => {
  const [paymentLink, setPaymentLink] = useState('');

  const startPaymentSession = async () => {
    try {
      const paymentLink = await fetchPromise();
      setPaymentLink(paymentLink);
    } catch (error) {
      console.error(error);
    }
  };

  const cancelPayment = () => {
    setPaymentLink('');
  };

  return (
    <FlashPaymentContext.Provider
      value={{ startPaymentSession, paymentLink, cancelPayment }}
    >
      {children}
    </FlashPaymentContext.Provider>
  );
};
