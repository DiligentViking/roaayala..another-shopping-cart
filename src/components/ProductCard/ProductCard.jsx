import { Link } from "react-router";
import styles from "./ProductCard.module.css";

import { ItemCounter } from "../";

function ProductCard({ product, addToCart, removeFromCart, cart }) {
  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div className={styles.card}>
      <Link
        className={styles.cardLink}
        to={`/product/${product.id}`}
        state={{ product }}
      >
        <div className={styles.cardCover}>
          <img
            className={styles.cardCoverImage}
            src={product.image}
            alt={product.title}
          />
        </div>
      </Link>

      <div className={styles.cardInfo}>
        <h3 className={styles.cardInfoTitle}>{product.title}</h3>
        <span className={styles.cardInfoPrice}>$ {product.price}</span>
      </div>

      <div className={styles.cardActions}>
        <ItemCounter
          product={product}
          itemQuantity={cartItem?.quantity}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
}

export default ProductCard;
