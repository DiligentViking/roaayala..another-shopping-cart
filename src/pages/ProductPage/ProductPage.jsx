import { useContext } from "react";
import { useParams } from "react-router";

import useProduct from "../../hooks/useProduct/useProduct";
import { CartContext } from "../../contexts/context";
import { ItemCounter } from "../../components";

function ProductPage() {
  const urlParams = useParams();
  const { products } = useProduct();

  const productId = +urlParams.productId;
  const product = products.find((item) => item.id === productId);

  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const cartItem = cart.find((item) => item.id === productId);
  const itemQuantity = cartItem?.quantity;

  if (!product) return <></>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt="" />
      <p>{product.description}</p>
      <p>
        <b>{product.category}</b>
      </p>
      <data value={product.price}>${product.price}</data>
      <ItemCounter
        product={product}
        itemQuantity={itemQuantity}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default ProductPage;
