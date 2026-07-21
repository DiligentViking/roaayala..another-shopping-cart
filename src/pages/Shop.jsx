import { Container, ProductCard, ProductsContainer } from "../components";
import useProduct from "../hooks/useProduct";

function Shop() {
  const { data: products } = useProduct();

  return (
    <div>
      <Container>
        <ProductsContainer>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsContainer>
      </Container>
    </div>
  );
}

export default Shop;
