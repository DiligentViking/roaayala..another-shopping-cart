import { useReducer } from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const product = action.payload;

      const existingProduct = state.data.find((item) => item.id === product.id);

      let newData;

      if (existingProduct) {
        newData = state.data.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        newData = [...state.data, { ...product, quantity: 1 }];
      }

      return {
        ...state,
        data: newData,
      };
    }
    case "REMOVE_ITEM": {
      const itemId = action.payload;

      const itemInCart = state.data.find((item) => item.id === itemId);

      if (!itemInCart) return state;

      let newData;

      if (itemInCart.quantity > 1) {
        newData = state.data.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item,
        );
      } else {
        newData = state.data.filter((item) => item.id !== itemId);
      }

      return {
        ...state,
        data: newData,
      };
    }

    default: {
      return state;
    }
  }
};

const useCart = () => {
  const [state, dispatch] = useReducer(cartReducer, {
    data: [],
  });

  const { totalItems, totalPrices } = state.data.reduce(
    (totals, item) => {
      totals.totalItems += item.quantity;
      totals.totalPrices += item.quantity * item.price;
      return totals;
    },
    { totalItems: 0, totalPrices: 0 },
  );

  const addToCart = (product) =>
    dispatch({ type: "ADD_ITEM", payload: product });

  const removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId });
  };

  return {
    cart: state.data,
    totalItems,
    totalPrices,
    addToCart,
    removeFromCart,
  };
};

export default useCart;
