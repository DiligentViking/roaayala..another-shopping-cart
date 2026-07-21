import { Container, ProductCard } from "../components";
import useProduct from "../hooks/useProduct";

function Shop() {
  const { data: products } = useProduct();

  return (
    <div>
      <Container>
        <div>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Shop;
