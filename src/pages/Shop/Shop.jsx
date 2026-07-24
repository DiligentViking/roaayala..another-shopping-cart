import { useState } from "react";
import {
  CategoriesContainer,
  Container,
  ProductCard,
  ProductsContainer,
} from "../../components";
import { useProduct } from "../../hooks";

import styles from "./Shop.module.css";
import { useLocation, useOutletContext } from "react-router";

function Shop() {
  const location = useLocation();
  const { products, productCategories, isLoading } = useProduct();

  const { cart, addToCart, removeFromCart } = useOutletContext();

  const categoryFromHome = location.state?.selectedCategory;

  const [activeCategory, setActiveCategory] = useState(
    categoryFromHome || null,
  );

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
                  removeFromCart={removeFromCart}
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
