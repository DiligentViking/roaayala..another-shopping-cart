import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardCover}>
        <img src={product.image} alt={product.title} />
      </div>

      <div className={styles.cardInfo}>
        <h3 className={styles.cardInfoTitle}>{product.title}</h3>
        <p className={styles.cardInfoDescription}>{product.description}</p>
        <span className={styles.carfInfoPrice}>{product.price}</span>
      </div>

      <div className={styles.cardActions}>
        <button>Add</button>
      </div>
    </div>
  );
}

export default ProductCard;
