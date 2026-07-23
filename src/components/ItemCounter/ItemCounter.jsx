import { Minus, Plus } from "lucide-react";

function ItemCounter({ product, cartItem, addToCart, removeFromCart }) {
  return (
    <div>
      {cartItem && (
        <>
          <button
            onClick={() => {
              removeFromCart(product.id);
            }}
          >
            {<Minus size={16} />}
          </button>
          <span>{cartItem.quantity}</span>
        </>
      )}
      <button
        onClick={() => {
          addToCart(product);
        }}
      >
        {<Plus size={16} />}
      </button>
    </div>
  );
}

export default ItemCounter;
