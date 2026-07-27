import { Outlet } from "react-router";
import { Navbar } from "../components";
import styles from "./RootLayout.module.css";
import CartProvider from "../contexts/CartProvider";

function RootLayout() {
  return (
    <CartProvider>
      <div className={styles.rootLayout}>
        <Navbar />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </CartProvider>
  );
}

export default RootLayout;
