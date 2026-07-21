import styles from "./ProductsContainer.module.css";

function ProductsContainer({ children }) {
  return <div style={styles.productsContainer}>{children}</div>;
}

export default ProductsContainer;
