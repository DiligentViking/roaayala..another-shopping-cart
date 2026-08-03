import { Minus, Plus } from "lucide-react";

import styles from "./ItemCounter.module.css";

function ItemCounter({ product, itemQuantity, addToCart, removeFromCart }) {
  return (
    <div
      className={`${styles.itemCounter} ${itemQuantity > 0 && styles.active} `}
    >
      {itemQuantity ? (
        <>
          <button
            className={styles.button}
            onClick={() => {
              removeFromCart(product.id);
            }}
          >
            {<Minus size={16} />}
          </button>

          <span>{itemQuantity}</span>

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
