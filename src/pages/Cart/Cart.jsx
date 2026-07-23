import { useOutletContext } from "react-router";
import { Container, ItemCounter } from "../../components";

function Cart() {
  const { cart, totalPrices, totalItems, addToCart, removeFromCart } =
    useOutletContext();

  console.log(cart);

  return (
    <div>
      <Container>
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>

              <ItemCounter
                product={item}
                cartItem={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
              <span>{item.price}</span>
              <span>{item.quantity}</span>
            </div>
          ))}
        </div>
        <span>Total prices: {totalPrices}</span>
        <span>Total items: {totalItems}</span>
      </Container>
    </div>
  );
}

export default Cart;
