import { Link } from "react-router";
import styles from "./ProductCard.module.css";
import { Minus, Plus } from "lucide-react";

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
          <div>
            {cartItem && (
              <>
                <button
                  onClick={() => {
                    removeFromCart(product.id);
                  }}
                >
                  {<Minus size={16} />}
                </button>
                <span>{cartItem.quantity}</span>
              </>
            )}
            <button
              onClick={() => {
                addToCart(product);
              }}
            >
              {<Plus size={16} />}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
