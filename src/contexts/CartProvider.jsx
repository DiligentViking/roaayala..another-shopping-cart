import { useCart } from "../hooks";

import { CartContext } from "./context";

function CartProvider({ children }) {
  const { cart, totalPrices, totalItems, addToCart, removeFromCart } =
    useCart();

  const cartSignal = {
    cart,
    totalPrices,
    totalItems,
    addToCart,
    removeFromCart,
  };
  return (
    <CartContext.Provider value={cartSignal}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
