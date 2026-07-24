import { useOutletContext } from "react-router";
import { Container, ProductCard } from "../../components";

import styles from "./Cart.module.css";

function Cart() {
  const { cart, totalPrices, addToCart, removeFromCart } = useOutletContext();

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
            <h3>Cart detail</h3>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <p>{item.title}</p>
                  <div>
                    <div>
                      <span>{item.quantity}</span>
                      <span>x</span>
                      <span>{item.price}</span>
                    </div>
                    <span>$ {(item.quantity * item.price).toFixed(2)}</span>
                  </div>
                </li>
              ))}
            </ul>
            <span>Total prices: $ {totalPrices.toFixed(2)}</span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
