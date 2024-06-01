import { useCallback, useEffect, useRef } from 'react';
import { useFlashPayment } from '../FlashPaymentProvider';

const FlashPaymentModal = () => {
  const { paymentLink, cancelPayment } = useFlashPayment();
  const dialogRef = useRef<HTMLDialogElement>(null);

  console.log({ paymentLink }, 'MODAL');

  const clostModal = useCallback(() => {
    cancelPayment();
  }, [cancelPayment]);

  useEffect(() => {
    if (!paymentLink) {
      clostModal();
      return;
    }

    dialogRef.current?.showModal();

    return () => {
      cancelPayment();
    };
  }, [paymentLink, clostModal, cancelPayment]);
  return (
    paymentLink && (
      <dialog
        data-modal-target="modal"
        ref={dialogRef}
        className="open:animate-fade-in rounded-md open:backdrop:animate-fade-in backdrop:bg-black/50 backdrop:backdrop-blur-md w-1/2 max-w-screen-xl h-[60vh] flex flex-col p-2"
      >
        <header>
          <button
            className="py-2 px-4 transition-all text-white border-2 bg-red-600 rounded-md hover:bg-red-800"
            onClick={clostModal}
          >
            X
          </button>
        </header>
        <main className="flex-1 ">
          <iframe
            className="w-full h-full"
            src={paymentLink}
            title="
          Flash Payment
          "
          />
        </main>
      </dialog>
    )
  );
};

export default FlashPaymentModal;
