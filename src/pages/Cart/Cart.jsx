import { useOutletContext } from "react-router";
import { Container } from "../../components";

function Cart() {
  const { cart, totalPrices, totalItems, addToCart } = useOutletContext();

  return (
    <div>
      <Container>
        <div>
          {cart.map((item) => (
            <span key={item.id}>{item.title}</span>
          ))}
        </div>
        <span>Total prices: {totalPrices}</span>
        <span>Total items: {totalItems}</span>
      </Container>
    </div>
  );
}

export default Cart;
