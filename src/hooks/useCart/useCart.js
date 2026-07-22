import { useReducer } from "react";

const calculateTotals = (cartData) => {
  return cartData.reduce(
    (totals, item) => {
      totals.totalItems += item.quantity;
      totals.totalPrices += item.quantity * item.price;
      return totals;
    },
    { totalItems: 0, totalPrices: 0 },
  );
};

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

      const newTotals = calculateTotals(newData);

      return {
        ...state,
        data: newData,
        totalItems: newTotals.totalItems,
        totalPrices: newTotals.totalPrices,
      };
    }
    case "DELETE_ITEM": {
      return;
    }

    default: {
      return state;
    }
  }
};

const useCart = () => {
  const [state, dispatch] = useReducer(cartReducer, {
    data: [],
    totalItems: 0,
    totalPrices: 0,
  });

  const addToCart = (product) =>
    dispatch({ type: "ADD_ITEM", payload: product });

  return {
    cart: state.data,
    totalItems: state.totalItems,
    totalPrices: state.totalPrices,
    addToCart,
  };
};

export default useCart;
