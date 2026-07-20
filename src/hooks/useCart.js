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
  const [state, dispatch] = useReducer(cartReducer, { data: [] });
  return state;
};

export default useCart;
