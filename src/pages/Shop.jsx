import { Container, ProductCard, ProductsContainer } from "../components";
import useProduct from "../hooks/useProduct";

import styles from "./Shop.module.css";

function Shop() {
  const { products, productCategories, isLoading } = useProduct();

  return (
    <div className={styles.shop}>
      <Container>
        <ProductsContainer>
          {isLoading ? (
            <>Loading...</>
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </ProductsContainer>
      </Container>
    </div>
  );
}

export default Shop;
