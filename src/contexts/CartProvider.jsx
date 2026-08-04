import { useCart } from "../hooks";

import { CartContext } from "./context";

function CartProvider({ children }) {
  const { cart, addToCart, removeFromCart, calculateTotals } = useCart();

  const cartSignal = {
    cart,
    addToCart,
    removeFromCart,
    calculateTotals,
  };
  return (
    <CartContext.Provider value={cartSignal}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
