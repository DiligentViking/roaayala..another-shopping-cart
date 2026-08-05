import { useContext } from "react";
import {
  CategoriesContainer,
  Container,
  ProductCard,
  ProductsContainer,
} from "../../components";
import { useProduct } from "../../hooks";
import styles from "./Shop.module.css";
import { useSearchParams } from "react-router";
import { CartContext } from "../../contexts/context";

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, productCategories, isLoading, error, refetchProducts } =
    useProduct();

  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const activeCategory = searchParams.get("category");

  console.log({ activeCategory });

  const displayedProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

  return (
    <div className={styles.shop}>
      <Container>
        <div className={styles.shopContainer}>
          {isLoading ? (
            <>Loading...</>
          ) : error ? (
            <>
              <p role="alert">Network Error: {error}</p>
              <button onClick={refetchProducts}>Try Again?</button>
            </>
          ) : (
            <CategoriesContainer
              productCategories={productCategories}
              activeCategory={activeCategory}
              setActiveCategory={(category) =>
                category === null
                  ? setSearchParams("")
                  : setSearchParams(`?category=${category}`)
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
