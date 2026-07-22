import { useState } from "react";
import {
  CategoriesContainer,
  Container,
  ProductCard,
  ProductsContainer,
} from "../../components";
import { useProduct } from "../../hooks";

import styles from "./Shop.module.css";

function Shop() {
  const { products, productCategories, isLoading } = useProduct();
  const [activeCategory, setActiveCategory] = useState(null);

  const displayedProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

  return (
    <div className={styles.shop}>
      <Container>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <CategoriesContainer
            productCategories={productCategories}
            setActiveCategory={(activeCategory) =>
              setActiveCategory(activeCategory)
            }
          />
        )}

        <ProductsContainer>
          {isLoading ? (
            <>Loading...</>
          ) : (
            displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </ProductsContainer>
      </Container>
    </div>
  );
}

export default Shop;
