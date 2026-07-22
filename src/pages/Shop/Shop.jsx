import { useState } from "react";
import {
  CategoriesContainer,
  Container,
  ProductCard,
  ProductsContainer,
} from "../../components";
import { useProduct } from "../../hooks";

import styles from "./Shop.module.css";
import { useOutletContext } from "react-router";

function Shop() {
  const { products, productCategories, isLoading } = useProduct();
  const [activeCategory, setActiveCategory] = useState(null);

  const { cart, totalItems, totalPrices, addToCart } = useOutletContext();

  const displayedProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

  return (
    <div className={styles.shop}>
      <Container>
        <div className={styles.shopContainer}>
          {isLoading ? (
            <>Loading...</>
          ) : (
            <CategoriesContainer
              productCategories={productCategories}
              activeCategory={activeCategory}
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
                <ProductCard
                  key={product.id}
                  product={product}
                  cart={cart}
                  addToCart={addToCart}
                />
              ))
            )}
          </ProductsContainer>
        </div>
      </Container>
    </div>
  );
}

export default Shop;
