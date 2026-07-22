import { useReducer } from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return;
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

  return {
    cart: state.data,
    totalItems: state.totalItems,
    totalPrices: state.totalPrices,
  };
};

export default useCart;
