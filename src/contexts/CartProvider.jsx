import { useCart } from "../hooks";

import { CartContext } from "./context";

function CartProvider({ children }) {
  const { cart, totalItems, totalPrices, addToCart, removeFromCart } =
    useCart();

  const cartSignal = {
    cart,
    totalItems,
    totalPrices,
    addToCart,
    removeFromCart,
  };
  return (
    <CartContext.Provider value={cartSignal}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
