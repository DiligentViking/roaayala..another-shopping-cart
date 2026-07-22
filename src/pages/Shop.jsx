import { useState } from "react";
import { Container, ProductCard, ProductsContainer } from "../components";
import useProduct from "../hooks/useProduct";

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
        <div>
          <ul
            onClick={(e) => {
              const target = e.target.closest("li");

              if (!target) return;

              const targetName = target.getAttribute("data-category");
              setActiveCategory(targetName === "null" ? null : targetName);
            }}
          >
            <li data-category="null">All</li>
            {productCategories.map((category) => (
              <li key={category.id} data-category={category.name}>
                {category.name}
              </li>
            ))}
          </ul>
        </div>

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
