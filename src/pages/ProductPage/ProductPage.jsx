import { useLocation } from "react-router";

function ProductPage() {
  const location = useLocation();
  const product = location.state?.product;

  return <div>{product.title}</div>;
}

export default ProductPage;
