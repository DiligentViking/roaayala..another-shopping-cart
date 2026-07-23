import { Link } from "react-router";
import styles from "./ProductCard.module.css";

import { ItemCounter } from "../";

function ProductCard({ product, addToCart, removeFromCart, cart }) {
  const cartItem = cart.find((item) => item.id === product.id);
  return (
    <Link className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.cardCover}>
          <img
            className={styles.cardCoverImage}
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className={styles.cardInfo}>
          <h3 className={styles.cardInfoTitle}>{product.title}</h3>
          <span className={styles.cardInfoPrice}>$ {product.price}</span>
        </div>

        <div className={styles.cardActions}>
          <ItemCounter
            product={product}
            cartItem={cartItem}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
