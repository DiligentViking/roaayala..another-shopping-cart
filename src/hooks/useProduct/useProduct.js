import { useCallback, useEffect, useMemo, useReducer } from "react";

const productReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START": {
      return { ...state, isLoading: true, error: null };
    }
    case "FETCH_SUCCESS": {
      return { ...state, isLoading: false, data: action.payload };
    }
    case "FETCH_ERROR": {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};

const useProduct = () => {
  const [state, dispatch] = useReducer(productReducer, {
    data: [],
    isLoading: false,
    error: null,
  });

  const fetchProducts = useCallback(async () => {
    dispatch({ type: "FETCH_START" });

    try {
      const res = await fetch("https://fakestoreapi.com/products");

      if (!res.ok) {
        throw new Error("Cannot fetch products");
      }

      const result = await res.json();

      dispatch({ type: "FETCH_SUCCESS", payload: result });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const productCategories = useMemo(() => {
    const uniqueCategory = [...new Set(state.data.map((p) => p.category))];

    return uniqueCategory.map((category) => ({
      id: crypto.randomUUID(),
      name: category,
    }));
  }, [state.data]);

  return {
    products: state.data,
    productCategories,
    isLoading: state.isLoading,
    error: state.error,
    refetchProducts: fetchProducts,
  };
};

export default useProduct;
