import { NavLink } from "react-router";
import { Container } from "..";
import styles from "./Navbar.module.css";
import { Home, ShoppingCart, Store } from "lucide-react";

function Navbar() {
  const links = [
    { id: 0, path: "/", name: "Home", icon: <Home size={20} /> },
    { id: 1, path: "shop", name: "Shop", icon: <Store size={20} /> },
    { id: 2, path: "cart", name: "Cart", icon: <ShoppingCart size={20} /> },
  ];
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.wrapper}>
          <h1 className={styles.siteTitle}>GoShop</h1>
          <ul className={styles.lists}>
            {links.map((link) => (
              <NavLink key={link.id} to={link.path} className={styles.link}>
                {({ isActive }) => (
                  <li
                    className={`${styles.list} ${isActive ? styles.active : ""}`}
                  >
                    <>
                      {isActive && <span>{link.icon}</span>}
                      <span>{link.name}</span>
                    </>
                  </li>
                )}
              </NavLink>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
