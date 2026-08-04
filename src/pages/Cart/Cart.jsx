import { Container, ProductCard } from "../../components";

import styles from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/context";

function Cart() {
  const { cart, addToCart, removeFromCart, calculateTotals } =
    useContext(CartContext);

  const { totalPrices } = calculateTotals();

  return (
    <div>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Cart</h2>
          <div className={styles.container}>
            <div className={styles.items}>
              {cart.length === 0 && <p>Empty</p>}
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
            <div className={styles.resume}>
              <h3 className={styles.resumeTitle}>Cart details</h3>
              <ul className={styles.resumeLists}>
                {cart.length === 0 && <li>Empty</li>}
                {cart.map((item) => (
                  <li key={item.id} className={styles.resumeList}>
                    <p className={styles.resumeListTitle}>{item.title}</p>
                    <div className={styles.resumeListDetail}>
                      <div className={styles.resumeListDetailInfo}>
                        <span className={styles.resumeListDetailInfoQuantity}>
                          {item.quantity}
                        </span>
                        <span>x</span>
                        <span className={styles.resumeListDetailInfoPrice}>
                          $ {item.price}
                        </span>
                      </div>
                      <span>$ {(item.quantity * item.price).toFixed(2)}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <span className={styles.resumeTotalPrices}>
                Total prices: $ {totalPrices.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
