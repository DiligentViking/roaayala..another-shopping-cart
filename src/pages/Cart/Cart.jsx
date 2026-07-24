import { useOutletContext } from "react-router";
import { Container, ProductCard } from "../../components";

import styles from "./Cart.module.css";

function Cart() {
  const { cart, totalPrices, totalItems, addToCart, removeFromCart } =
    useOutletContext();

  return (
    <div>
      <Container>
        <div className={styles.cartContainer}>
          <div className={styles.cartItem}>
            {cart.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          <div className={styles.cartResume}>
            <span>Total items: {totalItems}</span>
            <span>Total prices: $ {totalPrices.toFixed(2)}</span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
