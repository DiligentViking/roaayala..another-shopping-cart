import { Outlet } from "react-router";
import { Navbar } from "../components";
import styles from "./RootLayout.module.css";
import { useCart } from "../hooks";

function RootLayout() {
  const { cart, totalPrices, totalItems, addToCart } = useCart();

  return (
    <div className={styles.rootLayout}>
      <Navbar />
      <main className={styles.main}>
        <Outlet context={{ cart, totalItems, totalPrices, addToCart }} />
      </main>
    </div>
  );
}

export default RootLayout;
