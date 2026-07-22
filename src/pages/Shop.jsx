import { Container, ProductCard, ProductsContainer } from "../components";
import useProduct from "../hooks/useProduct";

import styles from "./Shop.module.css";

function Shop() {
  const { products, productCategories, isLoading } = useProduct();
  console.log(productCategories);

  return (
    <div className={styles.shop}>
      <Container>
        <div>
          <ul>
            {productCategories.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </div>
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
