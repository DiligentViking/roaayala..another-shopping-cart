import { Outlet } from "react-router";
import { Navbar } from "../components";
import styles from "./RootLayout.module.css";

function RootLayout() {
  return (
    <div className={styles.rootLayout}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
