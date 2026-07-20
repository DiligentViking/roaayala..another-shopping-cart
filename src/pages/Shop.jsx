import { Container } from "../components";
import useProduct from "../hooks/useProduct";

function Shop() {
  const { data: products } = useProduct();

  return (
    <div>
      <Container>
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <div></div>
              <img src={product.image} alt={product.title} />
              <h3> {product.title}</h3>
              <span>$ {product.price}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Shop;
