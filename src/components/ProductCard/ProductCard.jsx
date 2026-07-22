import { Link } from "react-router";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
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
          <button>Add</button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
