import { NavLink } from "react-router";
import { Container } from "..";
import styles from "./Navbar.module.css";
import { Home, ShoppingCart, Store } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/context";

function Navbar() {
  const links = [
    { id: 0, path: "/", name: "Home", icon: <Home size={20} /> },
    { id: 1, path: "shop", name: "Shop", icon: <Store size={20} /> },
    { id: 2, path: "cart", name: "Cart", icon: <ShoppingCart size={20} /> },
  ];

  const { cart, calculateTotals } = useContext(CartContext);

  const { totalItems } = calculateTotals();

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
                      {isActive && (
                        <span className={styles.icon}>{link.icon}</span>
                      )}
                      <span className={styles.name}>{link.name}</span>

                      {link.name === "Cart" && cart.length > 0 && (
                        <span className={styles.counter}>{totalItems}</span>
                      )}
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
