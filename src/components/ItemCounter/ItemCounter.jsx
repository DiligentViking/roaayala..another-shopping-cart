import { Minus, Plus } from "lucide-react";

import styles from "./ItemCounter.module.css";

function ItemCounter({ product, cartItem, addToCart, removeFromCart }) {
  return (
    <div className={`${styles.itemCounter} ${cartItem && styles.active} `}>
      {cartItem ? (
        <>
          <button
            className={styles.button}
            onClick={() => {
              removeFromCart(product.id);
            }}
          >
            {<Minus size={16} />}
          </button>

          {cartItem && <span>{cartItem.quantity}</span>}

          <button
            className={styles.button}
            onClick={() => {
              addToCart(product);
            }}
          >
            {<Plus size={16} />}
          </button>
        </>
      ) : (
        <button
          className={styles.button}
          onClick={() => {
            addToCart(product);
          }}
        >
          {<Plus size={16} />}
        </button>
      )}
    </div>
  );
}

export default ItemCounter;
