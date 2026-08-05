import { useParams } from "react-router";
import useProduct from "../../hooks/useProduct/useProduct";

function ProductPage() {
  const urlParams = useParams();
  const { products } = useProduct();

  const productId = +urlParams.productId;
  const product = products.find((item) => item.id === productId);

  if (!product) return <></>;

  return <div>{product.title}</div>;
}

export default ProductPage;
