import Button from "../../ui/Button";
import { useCheckout } from './useCheckOut';

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingout } = useCheckout();
  return (
    <Button variation="primary" size="small" onClick={() => checkout(bookingId)} disabled={isCheckingout}>
      Check out
    </Button>
  );
}

export default CheckoutButton;
