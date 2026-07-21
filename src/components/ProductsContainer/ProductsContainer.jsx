import styles from "./ProductsContainer.module.css";

function ProductsContainer({ children }) {
  return <div className={styles.productsContainer}>{children}</div>;
}

export default ProductsContainer;
