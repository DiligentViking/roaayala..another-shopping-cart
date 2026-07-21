import { Link } from "react-router";
import { Container } from "..";
import styles from "./Navbar.module.css";

function Navbar() {
  const links = [
    { id: 0, path: "/", name: "Home" },
    { id: 1, path: "shop", name: "Shop" },
    { id: 2, path: "cart", name: "Cart" },
  ];
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.wrapper}>
          <h1 className={styles.siteTitle}>GoShop</h1>
          <ul className={styles.lists}>
            {links.map((link) => (
              <li key={link.id} className={styles.list}>
                <Link to={link.path} className={styles.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
